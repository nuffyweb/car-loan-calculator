
import { CalculatorComponent } from '@core/CalculatorComponent'
import {createCalculationTemplate} from '@/components/calculation/calculation.template'
import { $ } from '@core/dom'
export class Calculation extends CalculatorComponent {
    static className = 'flex-wrapper'

    constructor($root, options) {
        super($root, {
            name: 'Calculation',
            listeners: ['input', 'click'],
            ...options
        })
    }

    toHTML() {
        return createCalculationTemplate()
    }

    onInput(event) {
        console.log(this.$root)
        console.log('Calculation: onInput', event.target , event.target.value.trim())
    }

    onClick(event) {
        const $target = $(event.target)
        if($target.closest('[data-type="openModalBtn"]')) {
            this.emitter.emit('openModalBtnClick')
        }
    }
}
