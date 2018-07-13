import 'nerv-devtools'
import Nerv from 'nervjs'
import Hello from './component/Hello'

if (process.env.NODE_ENV !== 'production')  {
    require('nerv-devtools')
}

Nerv.render(<Hello />, document.getElementById('app'))