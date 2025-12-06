#version 330 core
out vec4 FragColor;
void main() {
    // Subtle grid lines with slight blue tint (Interstellar style)
    FragColor = vec4(0.3, 0.35, 0.4, 0.4); // Translucent blue-gray lines
}
