import React from 'react'
// import { Welcome } from 'eleanor'
import Button from './components/Button'

export default function App() {

    return (
        <div>
            <div>
                <Button >Button</Button>
            </div>
            <br/>
            <div>
                <Button large >Button</Button>
            </div>
            <br/>
            <div>
                <Button  small >Button</Button>
            </div>
            <br/>

            <div>
                <Button secondary >Button</Button>
            </div>
            <br/>
            <div>
                <Button secondary large >Button</Button>
            </div>
            <br/>
            <div>
                <Button secondary  small  >Button</Button>
            </div>
            <br/>

            <div>
                <Button disabled >Button</Button>
            </div>
            <br/>
            <div>
                <Button disabled large >Button</Button>
            </div>
            <br/>
            <div>
                <Button disabled  small >Button</Button>
            </div>
            <br/>

            <div>
                <Button icon >Button</Button>
            </div>
            <br/>
            <div>
                <Button icon large >Button</Button>
            </div>
            <br/>
            <div>
                <Button icon  small >Button</Button>
            </div>
            <br/>

            <div>
                <Button icon iconinvert >Button</Button>
            </div>
            <br/>
            <div>
                <Button icon iconinvert large >Button</Button>
            </div>
            <br/>
            <div>
                <Button icon iconinvert  small >Button</Button>
            </div>
            <br/>

            <div>
                <Button icon icononly ></Button>
            </div>
            <br/>
            <div>
                <Button icon icononly large ></Button>
            </div>
            <br/>
            <div>
                <Button icon icononly small ></Button>
            </div>
            <br/>
        </div>
    )
}
