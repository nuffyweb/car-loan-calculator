import { Calculator } from '@/components/calculator/Calculator'
import {AutoConfig} from '@/components/autoConfig/AutoConfig'
import { Calculation } from '@/components/calculation/Calculation';
import './scss/index.scss'

const calculator = new Calculator('#app', {
    components: [AutoConfig, Calculation]
})

calculator.render()
