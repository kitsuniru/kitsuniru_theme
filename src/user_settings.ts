import * as vscode from "vscode";

const _otherSettings: Record<string, any> = {
};

const dependendedSettings = (): Record<string, any> => {
    const selfExtension = vscode.extensions.getExtension("kitsuniru.kitsuniru-theme")!;
    const selfExtensionPath = selfExtension.extensionPath;

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

export const updateUserSettings = async () => {
    const configuration = vscode.workspace.getConfiguration();
    const defaultScope = vscode.ConfigurationTarget.Global;
    const settings = dependendedSettings();

    for (const [key, value] of Object.entries(settings)) {
        await configuration.update(key, value, defaultScope);
    }
};
