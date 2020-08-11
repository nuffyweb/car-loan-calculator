import { CalculatorComponent } from '@core/CalculatorComponent'
import {createConfigTemplate} from '@/components/autoConfig/autoConfig.template'
import { $ } from '@core/dom'

const ButtonType = {
    save: `save`,
    close: `close`,
};

export class AutoConfig extends CalculatorComponent {
    static className = 'wrapper-modal'

    constructor($root, options) {
        super($root, {
            name: 'AutoConfig',
            listeners: ['input', 'click'],
            ...options
        })
        this.modal = $(this.$root.$el)
    }
    init() {
        super.init()
        this.emitter.subscribe('openModalBtnClick', () => {
            this.modal.addClass('active')
        })
    }

    toHTML() {
        return createConfigTemplate()
    }

    onInput(event) {
        console.log(this.$root)
        console.log('AutoConfig: onInput', event.target.value.trim())
    }

    onClick(event) {
        const $target = $(event.target)
console.log($target.data.type);
        if ($target.data.type === 'close' || $target.data.type === 'overlay') {
            this.modal.removeClass('active')
        }
        if($target.data.type === 'dot' ) {

        }
    }
}
