import React from 'react'

const CreatePost = () => {
    const formstyle = {
        'font-size':'13px'
    }
    return (
        <div>
            <div className="container" style={formstyle}>
                <br/>
                <form>
                    <input placeholder="Title" id="title" type="text" class="validate"/>
                    <br/>
                    <input placeholder="Description" id="description" type="text" class="validate"/>
                    
                    <div class="file-field input-field">
                        <div class="btn waves-effect grey darken-4">
                            <i class="material-icons">image</i>
                            <input type="file"/>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text"/>
                        </div>
                    </div>
                    <button class="btn waves-effect grey darken-4" type="submit" name="action">Post</button>   
                </form>    
            </div>   
        </div>
    )
}

export default CreatePost
