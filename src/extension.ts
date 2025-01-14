import * as vscode from "vscode";
import { updateUserSettings } from "./user_settings";


export async function activate(context: vscode.ExtensionContext) {
    updateUserSettings();
    console.log('New cool theme was initialized');

}
