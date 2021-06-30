import Debug from "../Debug/Debug";
import RenderingContext from "./RenderingContext";
export default class Shader {
    constructor(filePath) {
        const vertCode = `#version 300 es
        in vec4 a_position;
         
        void main() 
        {
            gl_Position = a_position;    
        }
        `;
        const fragCode = `#version 300 es
        precision highp float;

        uniform vec4 u_Color;

        out vec4 color;

        void main() 
        {
            color = u_Color;   
        }
        `;
        this._shader = this.CreateProgram(vertCode, fragCode);
        this._uniformLocationCache = new Map();
    }
    CreateProgram(vertexSource, fragmentSource) {
        const gl = RenderingContext.instance.gl;
        const program = gl.createProgram();
        const vertShader = this.CreateShader(vertexSource, gl.VERTEX_SHADER);
        const fragShader = this.CreateShader(fragmentSource, gl.FRAGMENT_SHADER);
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
        return program;
    }
    CreateShader(source, shaderType) {
        const gl = RenderingContext.instance.gl;
        const shader = gl.createShader(shaderType);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    }
    Bind() {
        const gl = RenderingContext.instance.gl;
        gl.useProgram(this._shader);
    }
    Unbind() {
        const gl = RenderingContext.instance.gl;
        gl.useProgram(null);
    }
    SetUniform4f(name, data) {
        const gl = RenderingContext.instance.gl;
        gl.uniform4f(this.GetUniformLocation(name), data[0], data[1], data[2], data[3]);
    }
    GetUniformLocation(name) {
        const gl = RenderingContext.instance.gl;
        if (this._uniformLocationCache.has(name)) {
            return this._uniformLocationCache[name];
        }
        const location = gl.getUniformLocation(this._shader, name);
        if (!location) {
            Debug.Error("Uniform " + name + " doesn't exists");
        }
        this._uniformLocationCache.set(name, location);
        return location;
    }
}
