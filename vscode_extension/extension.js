const vscode = require('vscode');
const { spawn } = require('child_process');

function activate(context) {
    let disposable = vscode.commands.registerCommand('aider.viewAINotes', function () {
        const pythonProcess = spawn('python', [context.extensionPath + '/aider_notes.py']);

        pythonProcess.stdout.on('data', (data) => {
            vscode.window.showInformationMessage(`AI Notes: ${data}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            vscode.window.showErrorMessage(`Error: ${data}`);
        });
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
