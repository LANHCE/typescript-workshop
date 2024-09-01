"use strict";
var Color;
(function (Color) {
    Color["Mint"] = "MINT";
    Color["Purple"] = "PURPLE";
    Color["Orange"] = "ORANGE";
})(Color || (Color = {}));
function getColorName(color) {
    switch (color) {
        case Color.Mint:
            return 'Mint';
        case Color.Purple:
            return 'Purple';
        case Color.Orange:
            return 'Orange';
        default:
            return 'Unknown color';
    }
}
console.log(getColorName(Color.Purple));
//# sourceMappingURL=enums.js.map