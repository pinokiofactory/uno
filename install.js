module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/peanutcocktail/UNO app",
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      when: "{{platform === 'win32'}}",
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install https://files.pythonhosted.org/packages/15/b0/be6cc74fd1e23da20d6c34db923858a8ae5017d39a13dedc188a935c646a/deepspeed-0.16.5-cp310-cp310-win_amd64.whl"
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install -r requirements.txt"
        ]
      }
    },
  ]
}
