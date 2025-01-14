import * as vscode from "vscode";

const _otherSettings: Record<string, any> = {
};

const dependendedSettings = (self: vscode.Extension<any>): Record<string, any> => {
    const selfExtensionPath = self.extensionPath;

    return {
        ..._otherSettings,
        "custom-ui-style.reloadWithoutPrompting": true,
        "custom-ui-style.preferRestart": true,
        'custom-ui-style.external.imports': [
            selfExtensionPath + '/assets/custom.css'
        ],
        'custom-ui-style.background.url': selfExtensionPath + '/assets/background.jpg'
    };
};

export const updateUserSettings = async (self: vscode.Extension<any>) => {
    const configuration = vscode.workspace.getConfiguration();
    const defaultScope = vscode.ConfigurationTarget.Global;
    const settings = dependendedSettings(self);

    for (const [key, value] of Object.entries(settings)) {
        await configuration.update(key, value, defaultScope);
    }
};
