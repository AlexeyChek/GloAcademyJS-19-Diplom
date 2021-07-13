
class MaskPhone {
  constructor(selector, mask = '+d (ddd) ddd-dd-dd', code = '7') {
    this.elems = document.querySelectorAll(selector);
    this.value = '';
    this.mask = mask;
    this.code = code;
  }

  beginInput(elem) {
    if (elem.value.length === 0) elem.value = `+${this.code} (`;
    this.value = elem.value;
  }

  chekValue(value) {
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 12) value = value.substr(0, 11);
    if (value[0] !== this.code) value = this.code + value;
    let  maskedValue = this.mask;
    for (let i = 0; i < value.length; i++) {
      maskedValue = maskedValue.replace('d', value[i]);
    }
    if (maskedValue.indexOf('d') > 0) maskedValue = maskedValue.slice(0, maskedValue.indexOf('d'));
    return maskedValue;
  }

  getValue(value) {
    if (value.length > this.value.length) {
      this.value += value.slice(this.value.length);
      this.value = this.chekValue.call(this, this.value);
      return this.value;
    } else {
      if (value.length < 4) {
        this.value = `+${this.code} (`;
        return this.value;
      } else {
        this.value = value;
        this.value = this.chekValue.call(this, this.value);
        return this.value;
      }
    }
  }

  getMask(elem) {
    const value = this.getValue.call(this, elem.value);
    elem.value = value;
  }

  endInput(elem) {
    if (elem.value.length <= 4) elem.value = '';
  }

  init() {
    this.elems.forEach(elem => {
      elem.addEventListener('focus', this.beginInput.bind(this, elem));
      elem.addEventListener('input', this.getMask.bind(this, elem));
      elem.addEventListener('blur', this.endInput.bind(this, elem));
    });
  }
}
export default MaskPhone;
