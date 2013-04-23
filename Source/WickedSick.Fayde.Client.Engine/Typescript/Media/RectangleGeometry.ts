/// <reference path="Geometry.ts" />
/// CODE
/// <reference path="../Shapes/RawPath.ts"/>

module Fayde.Media {
    export class RectangleGeometry extends Geometry {
        static RectProperty: DependencyProperty = DependencyProperty.RegisterCore("Rect", () => rect, RectangleGeometry, undefined, (d, args) => (<Geometry>d)._InvalidateGeometry());
        static RadiusXProperty: DependencyProperty = DependencyProperty.RegisterCore("RadiusX", () => Number, RectangleGeometry, 0, (d, args) => (<Geometry>d)._InvalidateGeometry());
        static RadiusYProperty: DependencyProperty = DependencyProperty.RegisterCore("RadiusY", () => Number, RectangleGeometry, 0, (d, args) => (<Geometry>d)._InvalidateGeometry());
        Rect: rect;
        RadiusX: number;
        RadiusY: number;

        private _Build(): Shapes.RawPath {
            var irect = this.Rect;
            if (!irect)
                return;

            var radiusX = this.RadiusX;
            var radiusY = this.RadiusY;

            var p = new Shapes.RawPath();
            p.RoundedRect(irect.X, irect.Y, irect.Width, irect.Height, radiusX, radiusY);
            return p;
        }
    }
    Nullstone.RegisterType(RectangleGeometry, "RectangleGeometry");
}