import React, { Component } from 'react'
import { Button, Input } from 'antd'
import './text-part-style.css';

class TextPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: '',
        }
    }

    onInputChange = field_name => e => {
        this.setState({ [field_name]: e.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <div className="text-part">
                <div className="text-input">
                    <Input placeholder="Text" value={this.state.texts}
                        onChange={this.onInputChange('texts')} />
                    <Button type="primary" onClick> Send </Button>
                </div>
            </div>
        )
    }
}

export default TextPart