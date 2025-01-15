
import * as vscode from 'vscode';
import { customUiStyleExtensionId } from './constants';

export const validateCustomUiStyle = () => {
    const customUiStyle = vscode.extensions.getExtension(customUiStyleExtensionId);
    if (customUiStyle == undefined) {
        vscode.window.showErrorMessage('Unable to find `Custom UI Style` extension.\nPlease, install it.');
        return;
    }
    vscode.commands.executeCommand('custom-ui-style.reload');
}
