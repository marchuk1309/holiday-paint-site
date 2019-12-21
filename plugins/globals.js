import Vue from 'vue'
import Element from 'element-ui'
import ParallaxComponent from "../components/ParallaxComponent";
import ParallaxElement from "../components/ParallaxElement";
import locale from 'element-ui/lib/locale/lang/ru-RU'
import 'assets/sass/element-variables.scss'

Vue.use(Element, { locale })
Vue.component('parallax-container', ParallaxComponent)
Vue.component('parallax-element', ParallaxElement)
