import axios from "axios";
import React from "react"
import Button from '@mui/material/Button';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            ID_post: "",
            Title:"",
            Picture:"",
            description:"",
            likes:[]
        }
        this.handleOnChange=this.handleOnChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    handleOnChange(state,value){
        this.setState({[state]:value})
    }
    handleClick(){
        var newPost={
            ID_post: this.props.userID,
            Title:this.state.Title,
            Picture:this.props.Picture,
            description:this.state.description,
        }
        axios.post("http://localhost:3000/api/post",newPost).then(res=>{
            console.log(res)
            this.props.change()
        }).catch(err=>console.log(err))
    }
    render() {
        return (
            <div class="create">
                
                <div class="create-editor">
                    <div>
                        <input class="create-input" type="text" placeholder="Post Title" onChange={(e)=>this.handleOnChange("Title", e.target.value)}></input>
                        <input class="create-input" type="text" placeholder="Image URL" onChange={(e)=>this.handleOnChange("Picture", e.target.value)}></input>
                        <textarea class="create-body-textarea" placeholder="Post description" onChange={(e)=>this.handleOnChange("description", e.target.value)}></textarea>
                        {/* <button class="create-submit-button" onClick={()=>this.handleClick()}>Confirm</button> */}
                        <Button variant="contained" color="primary" onClick={()=>this.handleClick()}>Confirm</Button>
                    </div>
                </div>
                <div class="create-preview">
                    <h2>PREVIEW</h2>
                </div>
            </div>
        )

    }
}
export default Create;
