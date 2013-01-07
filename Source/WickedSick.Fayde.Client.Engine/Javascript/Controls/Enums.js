﻿var GridUnitType = {
    Auto: 0,
    Pixel: 1,
    Star: 2
};

var _TextBoxModelChanged = {
    Nothing: 0,
    TextAlignment: 1,
    TextWrapping: 2,
    Selection: 3,
    Brush: 4,
    Font: 5,
    Text: 6
};
var _TextBoxEmitChanged = {
    NOTHING: 0,
    SELECTION: 1 << 0,
    TEXT: 1 << 1
};

var ScrollBarVisibility = {
    Disabled: 0,
    Auto: 1,
    Hidden: 2,
    Visible: 3
};

var PlacementMode = {
    Bottom: 0,
    Right: 1,
    Mouse: 2,
    Left: 3,
    Top: 4
};

var SelectionMode = {
    Single: 0,
    Multiple: 1,
    Extended: 2
};

var MediaElementState = {
    Closed: 0,
    Opening: 1,
    //Individualizing: 2,
    //AcquiringLicense: 3,
    Buffering: 4,
    Playing: 5,
    Paused: 6,
    Stopped: 7
};

var VirtualizationMode = {
    Standard: 0,
    Recycling: 1
};