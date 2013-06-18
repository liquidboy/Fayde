/// <reference path="Primitives/ButtonBase.ts" />
/// CODE

module Fayde.Controls {
    export class Button extends Primitives.ButtonBase {
        constructor() {
            super();
            this.DefaultStyleKey = (<any>this).constructor;
        }

        OnApplyTemplate() {
            super.OnApplyTemplate();
            this.UpdateVisualState(false);
        }

        OnIsEnabledChanged(e: IDependencyPropertyChangedEventArgs) {
            super.OnIsEnabledChanged(e);
            this.IsTabStop = e.NewValue;
        }
    }
    Nullstone.RegisterType(Button, "Button");
}