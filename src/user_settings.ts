import * as vscode from "vscode";
import { extensionDisplayName } from "./constants";

const _otherSettings: Record<string, any> = {
    "workbench.colorTheme": extensionDisplayName,
};

const stylingSettings = (self: vscode.Extension<any>): Record<string, any> => {
    const selfExtensionPath = self.extensionPath;

    return {
        ..._otherSettings,
        "custom-ui-style.reloadWithoutPrompting": true,
        "custom-ui-style.preferRestart": true,
        'custom-ui-style.background.opacity': 0.94,
        'custom-ui-style.external.imports': [
            'file://' + selfExtensionPath + '/assets/custom.css'
        ],
        'custom-ui-style.background.url': 'file:///' + selfExtensionPath + '/assets/background.jpg'
    };
};

export const updateUserSettings = async (self: vscode.Extension<any>) => {
    const configuration = vscode.workspace.getConfiguration();
    const defaultScope = vscode.ConfigurationTarget.Global;
    const settings = stylingSettings(self);

    for (const [key, value] of Object.entries(settings)) {
        await configuration.update(key, value, defaultScope);
    }
};
