import * as vscode from "vscode";
import { updateUserSettings } from "./user_settings";
import { extensionFullName, lastVersionKey } from "./constants";
import { validateCustomUiStyle } from "./styling_utils";


export async function activate(context: vscode.ExtensionContext) {
    const self = vscode.extensions.getExtension(extensionFullName)!;
    const currentVersion = self.packageJSON.version ?? "0.0.0";
    const lastVersion = context.globalState.get(lastVersionKey);

    if (currentVersion !== lastVersion) {
        context.globalState.update(lastVersionKey, currentVersion);
        validateCustomUiStyle();
        updateUserSettings(self);
    }

    console.log(`Kitsuniru theme ${currentVersion} was initialized`);

}
