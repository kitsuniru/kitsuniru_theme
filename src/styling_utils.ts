
import * as vscode from 'vscode';
export const validateCustomUiStyle = () => {
    const customUiStyle = vscode.extensions.getExtension('subframe7536.custom-ui-style');
    if (customUiStyle == undefined) {
        vscode.window.showErrorMessage('Unable to find `Custom UI Style` extension.\nPlease, install it.');
        return;
    }
    vscode.commands.executeCommand('custom-ui-style.reload');
}
