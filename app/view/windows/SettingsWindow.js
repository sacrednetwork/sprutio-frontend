// Generated by CoffeeScript 1.9.3
Ext.define('FM.view.windows.SettingsWindow', {
  extend: 'Ext.ux.window.Window',
  requires: ['FM.view.forms.SettingsForm'],
  alias: 'widget.settings-window',
  title: t("Settings"),
  cls: 'fm-settings-window',
  animate: true,
  constrain: true,
  layout: 'fit',
  bodyPadding: 0,
  width: 400,
  resizable: false,
  maximizable: false,
  modal: false,
  border: false,
  items: [
    {
      xtype: 'settings-form'
    }
  ],
  listeners: {
    show: {
      fn: function() {
        if (this.keymap != null) {
          this.keymap.destroy();
        }
        return this.keymap = new Ext.util.KeyMap({
          target: this.getEl(),
          binding: [
            {
              key: Ext.event.Event.ENTER,
              ctrl: true,
              fn: FM.HotKeys.HotKeyDecorator((function(_this) {
                return function(key, e) {
                  var button, i, len, ref;
                  FM.Logger.debug('ctrl + enter', arguments, _this);
                  ref = _this.preset;
                  for (i = 0, len = ref.length; i < len; i++) {
                    button = ref[i];
                    if ((button.enter != null) && button.enter && (button.ctrl != null) && button.ctrl && !button.isDisabled()) {
                      if (button.handler != null) {
                        button.handler(button, e);
                      }
                    }
                  }
                  return e.stopEvent();
                };
              })(this))
            }
          ]
        });
      }
    },
    beforeshow: {
      fn: function() {
        FM.Logger.debug('FM.view.windows.SettingsWindow beforeshow() called', this, arguments);
        Ext.ComponentQuery.query('numberfield[name=editor_print_margin_size]', this)[0].setValue(FM.Editor.settings.print_margin_size);
        Ext.ComponentQuery.query('numberfield[name=editor_font_size]', this)[0].setValue(FM.Editor.settings.font_size);
        Ext.ComponentQuery.query('numberfield[name=editor_tab_size]', this)[0].setValue(FM.Editor.settings.tab_size);
        Ext.ComponentQuery.query('checkbox[name=editor_full_line_selection]', this)[0].setValue(FM.Editor.settings.full_line_selection);
        Ext.ComponentQuery.query('checkbox[name=editor_highlight_active_line]', this)[0].setValue(FM.Editor.settings.highlight_active_line);
        Ext.ComponentQuery.query('checkbox[name=editor_show_invisible]', this)[0].setValue(FM.Editor.settings.show_invisible);
        Ext.ComponentQuery.query('checkbox[name=editor_wrap_lines]', this)[0].setValue(FM.Editor.settings.wrap_lines);
        Ext.ComponentQuery.query('checkbox[name=editor_use_soft_tabs]', this)[0].setValue(FM.Editor.settings.use_soft_tabs);
        Ext.ComponentQuery.query('checkbox[name=editor_show_line_numbers]', this)[0].setValue(FM.Editor.settings.show_line_numbers);
        Ext.ComponentQuery.query('checkbox[name=editor_highlight_selected_word]', this)[0].setValue(FM.Editor.settings.highlight_selected_word);
        Ext.ComponentQuery.query('checkbox[name=editor_show_print_margin]', this)[0].setValue(FM.Editor.settings.show_print_margin);
        Ext.ComponentQuery.query('checkbox[name=editor_use_autocompletion]', this)[0].setValue(FM.Editor.settings.use_autocompletion);
        Ext.ComponentQuery.query('checkbox[name=editor_enable_emmet]', this)[0].setValue(FM.Editor.settings.enable_emmet);
        Ext.ComponentQuery.query('radio[name=editor_code_folding_type]', this)[0].setValue(FM.Editor.settings.code_folding_type);
        Ext.ComponentQuery.query('combobox[name=editor_theme]', this)[0].setValue(FM.Editor.settings.theme);
        Ext.ComponentQuery.query('numberfield[name=viewer_print_margin_size]', this)[0].setValue(FM.Viewer.settings.print_margin_size);
        Ext.ComponentQuery.query('numberfield[name=viewer_font_size]', this)[0].setValue(FM.Viewer.settings.font_size);
        Ext.ComponentQuery.query('numberfield[name=viewer_tab_size]', this)[0].setValue(FM.Viewer.settings.tab_size);
        Ext.ComponentQuery.query('checkbox[name=viewer_full_line_selection]', this)[0].setValue(FM.Viewer.settings.full_line_selection);
        Ext.ComponentQuery.query('checkbox[name=viewer_highlight_active_line]', this)[0].setValue(FM.Viewer.settings.highlight_active_line);
        Ext.ComponentQuery.query('checkbox[name=viewer_show_invisible]', this)[0].setValue(FM.Viewer.settings.show_invisible);
        Ext.ComponentQuery.query('checkbox[name=viewer_wrap_lines]', this)[0].setValue(FM.Viewer.settings.wrap_lines);
        Ext.ComponentQuery.query('checkbox[name=viewer_use_soft_tabs]', this)[0].setValue(FM.Viewer.settings.use_soft_tabs);
        Ext.ComponentQuery.query('checkbox[name=viewer_show_line_numbers]', this)[0].setValue(FM.Viewer.settings.show_line_numbers);
        Ext.ComponentQuery.query('checkbox[name=viewer_highlight_selected_word]', this)[0].setValue(FM.Viewer.settings.highlight_selected_word);
        Ext.ComponentQuery.query('checkbox[name=viewer_show_print_margin]', this)[0].setValue(FM.Viewer.settings.show_print_margin);
        Ext.ComponentQuery.query('radio[name=viewer_code_folding_type]', this)[0].setValue(FM.Viewer.settings.code_folding_type);
        return Ext.ComponentQuery.query('combobox[name=viewer_theme]', this)[0].setValue(FM.Viewer.settings.theme);
      }
    }
  },
  initComponent: function() {
    FM.Logger.debug('FM.view.windows.SettingsWindow initComponent() called', arguments);
    this.save_btn = Ext.create('Ext.button.Button', {
      text: t("Save"),
      cls: 'fm-button-settings-save',
      disabled: false,
      scope: this,
      ctrl: true,
      enter: true,
      handler: (function(_this) {
        return function(button, e) {
          var editor_settings, viewer_settings;
          FM.Logger.debug("Save setting save handler called()", arguments, _this);
          if (_this.save != null) {
            editor_settings = {
              print_margin_size: Ext.ComponentQuery.query('numberfield[name=editor_print_margin_size]', _this)[0].getValue(),
              font_size: Ext.ComponentQuery.query('numberfield[name=editor_font_size]', _this)[0].getValue(),
              tab_size: Ext.ComponentQuery.query('numberfield[name=editor_tab_size]', _this)[0].getValue(),
              full_line_selection: Ext.ComponentQuery.query('checkbox[name=editor_full_line_selection]', _this)[0].getValue(),
              highlight_active_line: Ext.ComponentQuery.query('checkbox[name=editor_highlight_active_line]', _this)[0].getValue(),
              show_invisible: Ext.ComponentQuery.query('checkbox[name=editor_show_invisible]', _this)[0].getValue(),
              wrap_lines: Ext.ComponentQuery.query('checkbox[name=editor_wrap_lines]', _this)[0].getValue(),
              use_soft_tabs: Ext.ComponentQuery.query('checkbox[name=editor_use_soft_tabs]', _this)[0].getValue(),
              show_line_numbers: Ext.ComponentQuery.query('checkbox[name=editor_show_line_numbers]', _this)[0].getValue(),
              highlight_selected_word: Ext.ComponentQuery.query('checkbox[name=editor_highlight_selected_word]', _this)[0].getValue(),
              show_print_margin: Ext.ComponentQuery.query('checkbox[name=editor_show_print_margin]', _this)[0].getValue(),
              use_autocompletion: Ext.ComponentQuery.query('checkbox[name=editor_use_autocompletion]', _this)[0].getValue(),
              enable_emmet: Ext.ComponentQuery.query('checkbox[name=editor_enable_emmet]', _this)[0].getValue(),
              code_folding_type: Ext.ComponentQuery.query('radio[name=editor_code_folding_type]', _this)[0].getGroupValue(),
              theme: Ext.ComponentQuery.query('combobox[name=editor_theme]', _this)[0].getValue()
            };
            viewer_settings = {
              print_margin_size: Ext.ComponentQuery.query('numberfield[name=viewer_print_margin_size]', _this)[0].getValue(),
              font_size: Ext.ComponentQuery.query('numberfield[name=viewer_font_size]', _this)[0].getValue(),
              tab_size: Ext.ComponentQuery.query('numberfield[name=viewer_tab_size]', _this)[0].getValue(),
              full_line_selection: Ext.ComponentQuery.query('checkbox[name=viewer_full_line_selection]', _this)[0].getValue(),
              highlight_active_line: Ext.ComponentQuery.query('checkbox[name=viewer_highlight_active_line]', _this)[0].getValue(),
              show_invisible: Ext.ComponentQuery.query('checkbox[name=viewer_show_invisible]', _this)[0].getValue(),
              wrap_lines: Ext.ComponentQuery.query('checkbox[name=viewer_wrap_lines]', _this)[0].getValue(),
              use_soft_tabs: Ext.ComponentQuery.query('checkbox[name=viewer_use_soft_tabs]', _this)[0].getValue(),
              show_line_numbers: Ext.ComponentQuery.query('checkbox[name=viewer_show_line_numbers]', _this)[0].getValue(),
              highlight_selected_word: Ext.ComponentQuery.query('checkbox[name=viewer_highlight_selected_word]', _this)[0].getValue(),
              show_print_margin: Ext.ComponentQuery.query('checkbox[name=viewer_show_print_margin]', _this)[0].getValue(),
              code_folding_type: Ext.ComponentQuery.query('radio[name=viewer_code_folding_type]', _this)[0].getGroupValue(),
              theme: Ext.ComponentQuery.query('combobox[name=viewer_theme]', _this)[0].getValue()
            };
            return _this.save(button, _this, e, {
              editor_settings: editor_settings,
              viewer_settings: viewer_settings
            });
          }
        };
      })(this)
    });
    this.cancel_btn = Ext.create('Ext.button.Button', {
      cls: 'fm-button-settings-cancel',
      scope: this,
      text: t("Cancel"),
      disabled: false,
      handler: (function(_this) {
        return function(button, e) {
          FM.Logger.debug("Save setting Cancel handler called()", arguments, _this);
          _this.cancelled = true;
          if (_this.cancel != null) {
            return _this.cancel(button, _this, e);
          } else {
            return _this.close();
          }
        };
      })(this)
    });
    this.buttons = [this.save_btn, this.cancel_btn];
    this.preset = [this.save_btn, this.cancel_btn];
    FM.Logger.debug('init done', this, this.buttons, this.preset);
    return this.callParent(arguments);
  }
});