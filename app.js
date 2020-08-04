const toggleClass = (elem, className) => elem.classList.toggle(className);
const addClass = (elem, className) => elem.classList.add(className);
const removeClass = (elem, className) => elem.classList.remove(className);
const removeClassForAll = (elemes, className) => {
    elemes.forEach((elem) => {
        removeClass(elem, className)
    })
};
if (window.NodeList && !NodeList.prototype.filter) {
    NodeList.prototype.filter = Array.prototype.filter;
  }
const initialData = {
    initialFee: 5000,
    сreditTerm: 10
}
const colors = {}
const DEFAULT_COLOR = 'blue'
const UI_CLASSES = {
    initialFee: 'an-initial-fee',
    сreditTerm: 'credit-term',
    initialFeeRange: 'an-initial-fee-range',
    сreditTermRange: 'credit-term-range',
    сreditTotal: 'amount-of-credit',
    monthlyPayment: 'monthly-payment',
    inputsRange: 'input-range',

    modalBtnOpen: 'open-configure',
    wrapperModal: 'wrapper-modal',
    wrapperModalOverlay: 'overlay',
    modalCancelBtn: 'cancelConfiguration',
    modalSaveBtn: 'saveConfiguration',

    configColorsWrapper: '.color-dots',
    configColors: '.dot',
    configColorsImages: '.car',

    active: 'active'
}
class CalculatorUI {

    constructor() {
        this.initialFee = document.getElementById(UI_CLASSES.initialFee)
        this.сreditTerm = document.getElementById(UI_CLASSES.сreditTerm)
        this.initialFeeRange = document.getElementById(UI_CLASSES.initialFeeRange)
        this.сreditTermRange = document.getElementById(UI_CLASSES.сreditTermRange)
        this.сreditTotal = document.getElementById(UI_CLASSES.сreditTotal)
        this.monthlyPayment = document.getElementById(UI_CLASSES.monthlyPayment)

        this.inputsRange = document.getElementById(UI_CLASSES.inputsRange)

        this.modalBtnOpen = document.getElementById(UI_CLASSES.modalBtnOpen)

        this.init()
    }
    init() {
        this._assignValue()
    }
    setInitialFeeValue(value) {
        this.initialFee.value = value
    }
    setCreditTermValue(value) {
        this.сreditTerm.value = value
    }

    setCreditTotalValue(value) {
        this.сreditTotal.value = value
    }
    setMonthlyPaymentValue(value) {
        this.monthlyPayment.value = value
    }

    _assignValue() {
        this.initialFee.value = this.initialFeeRange.value
        this.сreditTerm.value = this.сreditTermRange.value
    }
    setOpenModalHandler(handler) {
        this.modalBtnOpen.addEventListener('click', (evt) => {
            evt.preventDefault();
            handler();
        });
    }
    setOnClickHandler(handler) {
        this._element.addEventListener(`click`, (evt) => {
            evt.preventDefault();

            if (!evt.target.closest(ROOFCLASS)) {
                return;
            }
            const current = evt.target.closest(ROOFCLASS)
            const roofType = current.dataset.name;
            if (this.currentRoofType === roofType) {
                return;
            }

            this.shootActiveRoof()
            this.currentRoofType = roofType
            this.setActive(current)
            handler(roofType);
        });
    }

}
class ConfigUI {

    constructor() {
        
        this.modalWrapper = document.getElementById(UI_CLASSES.wrapperModal)
        this.wrapperModalOverlay = document.getElementById(UI_CLASSES.wrapperModalOverlay)
        this.modalCancelBtn = document.getElementById(UI_CLASSES.modalCancelBtn)
        this.modalSaveBtn = document.getElementById(UI_CLASSES.modalSaveBtn)

        this.configColorsWrapper  = document.querySelector(UI_CLASSES.configColorsWrapper)
        this.configColors  = document.querySelectorAll(UI_CLASSES.configColors)
        
        this.configColorsImages  = document.querySelectorAll(UI_CLASSES.configColorsImages)
        this.targetColor = DEFAULT_COLOR
        
    }

    setActive() {
        addClass(this.modalWrapper, UI_CLASSES.active)
            this.setModalWrapperClick()
            this._setConfigColorsWrapperClick()
    }

    _closeModal() {
        removeClass(this.modalWrapper, UI_CLASSES.active)
    }
    setModalWrapperClick(handler) {
        this.modalWrapper.addEventListener('click', (evt) => {
            evt.preventDefault();
            const target = evt.target
            if (target == this.wrapperModalOverlay) this._closeModal()
            if (target == this.modalCancelBtn) this.modalCancelBtnClick()
            if (target == this.modalSaveBtn) this.modalSaveBtnClick(handler)
        });
    }
    _setConfigColorsWrapperClick() {
        this.configColorsWrapper.addEventListener('click', (evt) => {
            evt.preventDefault();
            const target = evt.target.closest('.dot')
            if(!target) return
            this.targetColor = target.dataset.color
            const targetColorImage = this.configColorsImages.filter(image =>
                image.getAttribute('data-color') === this.targetColor)
            removeClassForAll(this.configColors, UI_CLASSES.active)
            removeClassForAll(this.configColorsImages, UI_CLASSES.active)
            addClass(targetColorImage[0], UI_CLASSES.active)
            addClass(target, UI_CLASSES.active)
        });
    }
    modalCancelBtnClick() {
        this._closeModal()
    }
    modalSaveBtnClick(handler) {
        this._closeModal();
        handler();
    }
    getConfigOptions() {
        let options = {}
        return options = {
            color: this.targetColor
        }
    }

}
class ConfigModel {

}
class CalculatorModel {
    constructor(options = {}) {
        this._initialFee = options.initialFee || 0
        this._сreditTerm = options.сreditTerm || 0
        this._сreditTotal = options.сreditTotal || 0
        this._monthlyPayment = options.monthlyPayment || 0

        this.init()
    }

    init() {
        // console.log(this._initialFee);
        // console.log(this._сreditTerm);
    }

    set initialFee(value) {
        this._initialFee = value
    }
    get initialFee() {
        return this._initialFee
    }



}
class Calculator {


    constructor() {
        this._ui = new CalculatorUI()
        this._configUI = new ConfigUI()
        this._model = new CalculatorModel() // или new CalculatorModel(initialData)
        this._configModel = new ConfigModel()
        
        this._onOpenModal = this._onOpenModal.bind(this);
        this._onModalSaveBtnClick = this._onModalSaveBtnClick.bind(this);
        this._init()
    }
    _init() {
        console.log('Calculator_init');
        this._ui.setOpenModalHandler(this._onOpenModal);
        this._configUI.setModalWrapperClick(this._onModalSaveBtnClick)
    }
    _onModalSaveBtnClick() {
        const opt = this._configUI.getConfigOptions()
        console.log(opt);
    }
    _onOpenModal() {
        this._configUI.setActive()
        
    }

}



const calc = new Calculator()
