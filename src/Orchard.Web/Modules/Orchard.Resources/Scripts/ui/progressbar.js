/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

/*!
 * jQuery UI Progressbar @VERSION
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Progressbar
//>>group: Widgets
//>>description: Displays a status indicator for loading state, standard percentage, and other progress indicators.
//>>docs: http://api.jqueryui.com/progressbar/
//>>demos: http://jqueryui.com/progressbar/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/progressbar.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"../version",
			"../widget"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

return $.widget( "ui.progressbar", {
	version: "@VERSION",
	options: {
		classes: {
			"ui-progressbar": "ui-corner-all",
			"ui-progressbar-value": "ui-corner-left",
			"ui-progressbar-complete": "ui-corner-right"
		},
		max: 100,
		value: 0,

		change: null,
		complete: null
	},

	min: 0,

	_create: function() {

		// Constrain initial value
		this.oldValue = this.options.value = this._constrainedValue();

		this.element.attr( {

			// Only set static values; aria-valuenow and aria-valuemax are
			// set inside _refreshValue()
			role: "progressbar",
			"aria-valuemin": this.min
		} );
		this._addClass( "ui-progressbar", "ui-widget ui-widget-content" );

		this.valueDiv = $( "<div>" ).appendTo( this.element );
		this._addClass( this.valueDiv, "ui-progressbar-value", "ui-widget-header" );
		this._refreshValue();
	},

	_destroy: function() {
		this.element.removeAttr( "role aria-valuemin aria-valuemax aria-valuenow" );

		this.valueDiv.remove();
	},

	value: function( newValue ) {
		if ( newValue === undefined ) {
			return this.options.value;
		}

		this.options.value = this._constrainedValue( newValue );
		this._refreshValue();
	},

	_constrainedValue: function( newValue ) {
		if ( newValue === undefined ) {
			newValue = this.options.value;
		}

		this.indeterminate = newValue === false;

		// Sanitize value
		if ( typeof newValue !== "number" ) {
			newValue = 0;
		}

		return this.indeterminate ? false :
			Math.min( this.options.max, Math.max( this.min, newValue ) );
	},

	_setOptions: function( options ) {

		// Ensure "value" option is set after other values (like max)
		var value = options.value;
		delete options.value;

		this._super( options );

		this.options.value = this._constrainedValue( value );
		this._refreshValue();
	},

	_setOption: function( key, value ) {
		if ( key === "max" ) {

			// Don't allow a max less than min
			value = Math.max( this.min, value );
		}
		this._super( key, value );
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this.element.attr( "aria-disabled", value );
		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	_percentage: function() {
		return this.indeterminate ? 100 : 100 * ( this.options.value - this.min ) / ( this.options.max - this.min );
	},

	_refreshValue: function() {
		var value = this.options.value,
			percentage = this._percentage();

		this.valueDiv
			.toggle( this.indeterminate || value > this.min )
			.width( percentage.toFixed( 0 ) + "%" );

		this
			._toggleClass( this.valueDiv, "ui-progressbar-complete", null,
				value === this.options.max )
			._toggleClass( "ui-progressbar-indeterminate", null, this.indeterminate );

		if ( this.indeterminate ) {
			this.element.removeAttr( "aria-valuenow" );
			if ( !this.overlayDiv ) {
				this.overlayDiv = $( "<div>" ).appendTo( this.valueDiv );
				this._addClass( this.overlayDiv, "ui-progressbar-overlay" );
			}
		} else {
			this.element.attr( {
				"aria-valuemax": this.options.max,
				"aria-valuenow": value
			} );
			if ( this.overlayDiv ) {
				this.overlayDiv.remove();
				this.overlayDiv = null;
			}
		}

		if ( this.oldValue !== value ) {
			this.oldValue = value;
			this._trigger( "change" );
		}
		if ( value === this.options.max ) {
			this._trigger( "complete" );
		}
	}
} );

} ) );

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByb2dyZXNzYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgVUkgUHJvZ3Jlc3NiYXIgQFZFUlNJT05cbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogUHJvZ3Jlc3NiYXJcbi8vPj5ncm91cDogV2lkZ2V0c1xuLy8+PmRlc2NyaXB0aW9uOiBEaXNwbGF5cyBhIHN0YXR1cyBpbmRpY2F0b3IgZm9yIGxvYWRpbmcgc3RhdGUsIHN0YW5kYXJkIHBlcmNlbnRhZ2UsIGFuZCBvdGhlciBwcm9ncmVzcyBpbmRpY2F0b3JzLlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL3Byb2dyZXNzYmFyL1xuLy8+PmRlbW9zOiBodHRwOi8vanF1ZXJ5dWkuY29tL3Byb2dyZXNzYmFyL1xuLy8+PmNzcy5zdHJ1Y3R1cmU6IC4uLy4uL3RoZW1lcy9iYXNlL2NvcmUuY3NzXG4vLz4+Y3NzLnN0cnVjdHVyZTogLi4vLi4vdGhlbWVzL2Jhc2UvcHJvZ3Jlc3NiYXIuY3NzXG4vLz4+Y3NzLnRoZW1lOiAuLi8uLi90aGVtZXMvYmFzZS90aGVtZS5jc3NcblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFtcblx0XHRcdFwianF1ZXJ5XCIsXG5cdFx0XHRcIi4uL3ZlcnNpb25cIixcblx0XHRcdFwiLi4vd2lkZ2V0XCJcblx0XHRdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSggZnVuY3Rpb24oICQgKSB7XG5cbnJldHVybiAkLndpZGdldCggXCJ1aS5wcm9ncmVzc2JhclwiLCB7XG5cdHZlcnNpb246IFwiQFZFUlNJT05cIixcblx0b3B0aW9uczoge1xuXHRcdGNsYXNzZXM6IHtcblx0XHRcdFwidWktcHJvZ3Jlc3NiYXJcIjogXCJ1aS1jb3JuZXItYWxsXCIsXG5cdFx0XHRcInVpLXByb2dyZXNzYmFyLXZhbHVlXCI6IFwidWktY29ybmVyLWxlZnRcIixcblx0XHRcdFwidWktcHJvZ3Jlc3NiYXItY29tcGxldGVcIjogXCJ1aS1jb3JuZXItcmlnaHRcIlxuXHRcdH0sXG5cdFx0bWF4OiAxMDAsXG5cdFx0dmFsdWU6IDAsXG5cblx0XHRjaGFuZ2U6IG51bGwsXG5cdFx0Y29tcGxldGU6IG51bGxcblx0fSxcblxuXHRtaW46IDAsXG5cblx0X2NyZWF0ZTogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBDb25zdHJhaW4gaW5pdGlhbCB2YWx1ZVxuXHRcdHRoaXMub2xkVmFsdWUgPSB0aGlzLm9wdGlvbnMudmFsdWUgPSB0aGlzLl9jb25zdHJhaW5lZFZhbHVlKCk7XG5cblx0XHR0aGlzLmVsZW1lbnQuYXR0cigge1xuXG5cdFx0XHQvLyBPbmx5IHNldCBzdGF0aWMgdmFsdWVzOyBhcmlhLXZhbHVlbm93IGFuZCBhcmlhLXZhbHVlbWF4IGFyZVxuXHRcdFx0Ly8gc2V0IGluc2lkZSBfcmVmcmVzaFZhbHVlKClcblx0XHRcdHJvbGU6IFwicHJvZ3Jlc3NiYXJcIixcblx0XHRcdFwiYXJpYS12YWx1ZW1pblwiOiB0aGlzLm1pblxuXHRcdH0gKTtcblx0XHR0aGlzLl9hZGRDbGFzcyggXCJ1aS1wcm9ncmVzc2JhclwiLCBcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudFwiICk7XG5cblx0XHR0aGlzLnZhbHVlRGl2ID0gJCggXCI8ZGl2PlwiICkuYXBwZW5kVG8oIHRoaXMuZWxlbWVudCApO1xuXHRcdHRoaXMuX2FkZENsYXNzKCB0aGlzLnZhbHVlRGl2LCBcInVpLXByb2dyZXNzYmFyLXZhbHVlXCIsIFwidWktd2lkZ2V0LWhlYWRlclwiICk7XG5cdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdH0sXG5cblx0X2Rlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKCBcInJvbGUgYXJpYS12YWx1ZW1pbiBhcmlhLXZhbHVlbWF4IGFyaWEtdmFsdWVub3dcIiApO1xuXG5cdFx0dGhpcy52YWx1ZURpdi5yZW1vdmUoKTtcblx0fSxcblxuXHR2YWx1ZTogZnVuY3Rpb24oIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnMudmFsdWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcHRpb25zLnZhbHVlID0gdGhpcy5fY29uc3RyYWluZWRWYWx1ZSggbmV3VmFsdWUgKTtcblx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0fSxcblxuXHRfY29uc3RyYWluZWRWYWx1ZTogZnVuY3Rpb24oIG5ld1ZhbHVlICkge1xuXHRcdGlmICggbmV3VmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdG5ld1ZhbHVlID0gdGhpcy5vcHRpb25zLnZhbHVlO1xuXHRcdH1cblxuXHRcdHRoaXMuaW5kZXRlcm1pbmF0ZSA9IG5ld1ZhbHVlID09PSBmYWxzZTtcblxuXHRcdC8vIFNhbml0aXplIHZhbHVlXG5cdFx0aWYgKCB0eXBlb2YgbmV3VmFsdWUgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRuZXdWYWx1ZSA9IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IGZhbHNlIDpcblx0XHRcdE1hdGgubWluKCB0aGlzLm9wdGlvbnMubWF4LCBNYXRoLm1heCggdGhpcy5taW4sIG5ld1ZhbHVlICkgKTtcblx0fSxcblxuXHRfc2V0T3B0aW9uczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBFbnN1cmUgXCJ2YWx1ZVwiIG9wdGlvbiBpcyBzZXQgYWZ0ZXIgb3RoZXIgdmFsdWVzIChsaWtlIG1heClcblx0XHR2YXIgdmFsdWUgPSBvcHRpb25zLnZhbHVlO1xuXHRcdGRlbGV0ZSBvcHRpb25zLnZhbHVlO1xuXG5cdFx0dGhpcy5fc3VwZXIoIG9wdGlvbnMgKTtcblxuXHRcdHRoaXMub3B0aW9ucy52YWx1ZSA9IHRoaXMuX2NvbnN0cmFpbmVkVmFsdWUoIHZhbHVlICk7XG5cdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdH0sXG5cblx0X3NldE9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0aWYgKCBrZXkgPT09IFwibWF4XCIgKSB7XG5cblx0XHRcdC8vIERvbid0IGFsbG93IGEgbWF4IGxlc3MgdGhhbiBtaW5cblx0XHRcdHZhbHVlID0gTWF0aC5tYXgoIHRoaXMubWluLCB2YWx1ZSApO1xuXHRcdH1cblx0XHR0aGlzLl9zdXBlcigga2V5LCB2YWx1ZSApO1xuXHR9LFxuXG5cdF9zZXRPcHRpb25EaXNhYmxlZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHRoaXMuX3N1cGVyKCB2YWx1ZSApO1xuXG5cdFx0dGhpcy5lbGVtZW50LmF0dHIoIFwiYXJpYS1kaXNhYmxlZFwiLCB2YWx1ZSApO1xuXHRcdHRoaXMuX3RvZ2dsZUNsYXNzKCBudWxsLCBcInVpLXN0YXRlLWRpc2FibGVkXCIsICEhdmFsdWUgKTtcblx0fSxcblxuXHRfcGVyY2VudGFnZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuaW5kZXRlcm1pbmF0ZSA/IDEwMCA6IDEwMCAqICggdGhpcy5vcHRpb25zLnZhbHVlIC0gdGhpcy5taW4gKSAvICggdGhpcy5vcHRpb25zLm1heCAtIHRoaXMubWluICk7XG5cdH0sXG5cblx0X3JlZnJlc2hWYWx1ZTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHZhbHVlID0gdGhpcy5vcHRpb25zLnZhbHVlLFxuXHRcdFx0cGVyY2VudGFnZSA9IHRoaXMuX3BlcmNlbnRhZ2UoKTtcblxuXHRcdHRoaXMudmFsdWVEaXZcblx0XHRcdC50b2dnbGUoIHRoaXMuaW5kZXRlcm1pbmF0ZSB8fCB2YWx1ZSA+IHRoaXMubWluIClcblx0XHRcdC53aWR0aCggcGVyY2VudGFnZS50b0ZpeGVkKCAwICkgKyBcIiVcIiApO1xuXG5cdFx0dGhpc1xuXHRcdFx0Ll90b2dnbGVDbGFzcyggdGhpcy52YWx1ZURpdiwgXCJ1aS1wcm9ncmVzc2Jhci1jb21wbGV0ZVwiLCBudWxsLFxuXHRcdFx0XHR2YWx1ZSA9PT0gdGhpcy5vcHRpb25zLm1heCApXG5cdFx0XHQuX3RvZ2dsZUNsYXNzKCBcInVpLXByb2dyZXNzYmFyLWluZGV0ZXJtaW5hdGVcIiwgbnVsbCwgdGhpcy5pbmRldGVybWluYXRlICk7XG5cblx0XHRpZiAoIHRoaXMuaW5kZXRlcm1pbmF0ZSApIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyKCBcImFyaWEtdmFsdWVub3dcIiApO1xuXHRcdFx0aWYgKCAhdGhpcy5vdmVybGF5RGl2ICkge1xuXHRcdFx0XHR0aGlzLm92ZXJsYXlEaXYgPSAkKCBcIjxkaXY+XCIgKS5hcHBlbmRUbyggdGhpcy52YWx1ZURpdiApO1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggdGhpcy5vdmVybGF5RGl2LCBcInVpLXByb2dyZXNzYmFyLW92ZXJsYXlcIiApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuYXR0cigge1xuXHRcdFx0XHRcImFyaWEtdmFsdWVtYXhcIjogdGhpcy5vcHRpb25zLm1heCxcblx0XHRcdFx0XCJhcmlhLXZhbHVlbm93XCI6IHZhbHVlXG5cdFx0XHR9ICk7XG5cdFx0XHRpZiAoIHRoaXMub3ZlcmxheURpdiApIHtcblx0XHRcdFx0dGhpcy5vdmVybGF5RGl2LnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLm92ZXJsYXlEaXYgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggdGhpcy5vbGRWYWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHR0aGlzLm9sZFZhbHVlID0gdmFsdWU7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCBcImNoYW5nZVwiICk7XG5cdFx0fVxuXHRcdGlmICggdmFsdWUgPT09IHRoaXMub3B0aW9ucy5tYXggKSB7XG5cdFx0XHR0aGlzLl90cmlnZ2VyKCBcImNvbXBsZXRlXCIgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxufSApICk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=