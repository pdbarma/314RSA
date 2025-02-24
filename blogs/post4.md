# AI Tools 101: A Guide to Running LLMs locally

Hey folks, Just A Simple Tutorial Blog for running AI-Tools locally on your computer/laptop.
The AI-Tools in this blog are - DeepSeekr1 using Ollama framework inside docker wrapper.

## Running LLMs Locally with Ollama: DeepSeekr1 Model
### Installation Process

_Remember these numbers:_
_In order to select the right LLM, we need to know the specifications of our setup. The rule of thumb is that we take the size of the LLM and add the 1.2times i.e if the size is 6GB, The required RAM to run the model is (6+7.2)=13.2GB of RAM/VRAM_


Getting started with Ollama is straightforward. Here's how to set it up:

Step 1: Install Ollama
   - Visit the official Ollama website or GitHub repository
   - Choose the appropriate installer for your operating system
   - Ensure you have NVIDIA/AMD GPU drivers installed for GPU acceleration

Step 2: Install DeepSeek Model from Ollama library
   - Browse available models at ollama.com/models
   - Select an LLM that matches your requirements (e.g., LLaMa 3.1)
   - Open your terminal or command prompt
   - Run the model using: `ollama run [model-name]` which in this case it will be `ollama run deepseek-r1`
   - Start interacting with your model through the terminal

## Managing Your Models
### Default Installation Locations
Models are stored in system-specific directories:
- Windows: `C:\Users\%username%\.ollama\models`
- macOS: `~/.ollama/models`
- Linux: `/usr/share/ollama/.ollama/models`

_**Now incase the size of the model is too large or your local disk C has minimum storage. There is a way to allocate space in another disk. The steps are below:**_

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
2. Run ollama in Terminal
3. Use the command: `ollama rm /path/to/model name` to remove the model

Step 3: Install Docker

1. Open your browser and search for "Docker".
2. Download the installer for your operating system.
3. Open the installer from your downloads folder.

Follow the installation steps.
1. Restart your PC after installation.
2. Open Docker and create an account if required.
3. Skip the survey and ensure Docker is running.

Step 4: Install Open WebUI for a Better Interface

1. Search for "how to start Open WebUI container" in your browser.
2. Find the command for running Open WebUI with Docker.
   *If you have an NVIDIA GPU, use the appropriate command for better performance.
3. Open PowerShell and paste the command.
4. Press Enter and wait for the installation to complete.
5. Click "Allow" when prompted.
6. Open "Windows Features" and ensure "Virtual Machine Platform" is enabled.
7. In Docker, locate the new container that has been created.
8. Click on it and start the WebUI.
9. Create an account and log in.
10. DeepSeek R1 is now accessible via a web interface.

Step 5: Running DeepSeek Offline
1. Disconnect from the internet.
2. Open the WebUI and type a prompt.
3. The model will generate a response even without an internet connection.

Step 6: Stopping DeepSeek
1. Open Docker.
2. Locate the running DeepSeek container.
3. Click the stop button to shut it down.

Step 7: Uninstalling Everything
1. Open "Control Panel" > "Programs and Features".
2. Uninstall Docker.
3. Uninstall Ollama.
4. Open File Explorer and navigate to: C:\Users\YourUsername
5. Delete the Docker and Ollama folders.
6. Open "Windows Features" again and disable "Windows Subsystem for Linux" if needed.
7. Restart your PC to finalize the removal.



