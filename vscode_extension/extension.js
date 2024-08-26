const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

let aiderSession = null;

function activate(context) {
    console.log('Aider VS Code extension is now active!');

    let showNotesDisposable = vscode.commands.registerCommand('aider-vscode.showNotes', showNotes);
    let startSessionDisposable = vscode.commands.registerCommand('aider-vscode.startAiderSession', startAiderSession);
    let endSessionDisposable = vscode.commands.registerCommand('aider-vscode.endAiderSession', endAiderSession);

    context.subscriptions.push(showNotesDisposable);
    context.subscriptions.push(startSessionDisposable);
    context.subscriptions.push(endSessionDisposable);
}

function showNotes() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No active editor!');
        return;
    }

    const document = editor.document;
    const fileName = path.basename(document.fileName);
    const notesFileName = `${fileName}.md`;
    const notesFilePath = path.join(path.dirname(document.fileName), notesFileName);

    if (fs.existsSync(notesFilePath)) {
        vscode.workspace.openTextDocument(notesFilePath).then(doc => {
            vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside);
        });
    } else {
        vscode.window.showInformationMessage(`No notes found for ${fileName}`);
    }
}

async function startAiderSession() {
    if (aiderSession) {
        vscode.window.showInformationMessage('An Aider session is already active.');
        return;
    }

    const config = vscode.workspace.getConfiguration('aider');
    const apiKey = config.get('apiKey');
    const model = config.get('model');

    if (!apiKey) {
        vscode.window.showErrorMessage('Please set your API key in the Aider extension settings.');
        return;
    }

    try {
        // Here you would typically start a connection to the Aider backend
        // For now, we'll just simulate it
        aiderSession = { apiKey, model };
        vscode.window.showInformationMessage(`Aider AI pair programming session started with ${model}.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Failed to start Aider session: ${error.message}`);
    }
}

function endAiderSession() {
    if (!aiderSession) {
        vscode.window.showInformationMessage('No active Aider session to end.');
        return;
    }

    // Here you would typically close the connection to the Aider backend
    // For now, we'll just simulate it
    aiderSession = null;
    vscode.window.showInformationMessage('Aider AI pair programming session ended.');
}

function deactivate() {
    if (aiderSession) {
        endAiderSession();
    }
}

module.exports = {
    activate,
    deactivate
}
