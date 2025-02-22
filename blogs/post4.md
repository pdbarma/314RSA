# AI Tools 101: A Guide to Running LLMs and AI Image Generation locally

Hey folks, Just A Simple Tutorial Blog for running AI-Tools locally on your computer/laptop.
The AI-Tools in this blog are - DeepSeekr1 using Ollama framework inside docker wrapper.

## Running LLMs Locally with Ollama: DeepSeekr1 Model
### Installation Process

_Remember these numbers:_
_In order to select the right LLM Model, we need to know the specifications of our setup. The rule of thumb is that we take the size of the LLM model and add the 1.2times i.e if the size is 6GB, The required RAM to run the model is (6+7.2)=13.2GB of RAM/VRAM_


Getting started with Ollama is straightforward. Here's how to set it up:

1. **Download Ollama**
   - Visit the official Ollama website or GitHub repository
   - Choose the appropriate installer for your operating system
   - Ensure you have NVIDIA/AMD GPU drivers installed for GPU acceleration

2. **Choose and Run a Model**
   - Browse available models at ollama.com/models
   - Select an LLM that matches your requirements (e.g., LLaMa 3.1)
   - Open your terminal or command prompt
   - Run the model using: `ollama run [model-name]` which in this case it will be `ollama run deepseek-r1`
   - Start interacting with your model through the terminal

### Managing Your Models

### Default Installation Locations
Models are stored in system-specific directories:
- Windows: `C:\Users\%username%\.ollama\models`
- macOS: `~/.ollama/models`
- Linux: `/usr/share/ollama/.ollama/models`

### _*Now incase the size of the model is too large or your local disk C has minimum storage. There is a way to allocate space in another disk. The steps are below:_

#### Customizing Model Storage
- Set the `OLLAMA_MODELS` environment variable to change the default storage location
    - To set the new storage location:
        - Open `Edit environmental Variables`
        - Go to `Environmental Variables`
        - Now under the System Variables, click `New`
        - Now name it `OLLAMA_MODELS`
        - And in the path, attach the path of the new folder where you want to save the AI Models.
        - After this, You can either move the models folder or, reinstall the models
        - To verify installation, Check the folder if it has any folder named `blobs` if yes, the reallocation is successful.
- Useful for managing disk space across different drives

#### Removing Models
To uninstall models:
1. Stop any running services using the model
2. Use the command: `sudo rm /path/to/model`

## Docker Integration for LLMs

### Setting Up Ollama in Docker

1. **Create Your Dockerfile**
```dockerfile
FROM ubuntu:22.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install curl
RUN curl -fsSL https://ollama.com/install.sh | sh
```

2. **Add Model Downloads**
```dockerfile
RUN ollama run deepseek-r1en:7b


blog under construction...
