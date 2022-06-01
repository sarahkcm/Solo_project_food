import React from 'react';
import axios from 'axios';
import Home from "../src/pages/Home"
import Profile from '../src/pages/Profile.js'
import OnePost from '../src/pages/OnePost.js'



export default class App extends React.Component {
    constructor(){
        super()
        this.state={
            post:[],
            user: [],
            show: "Home"
        }
        this.getPost = this.getPost.bind(this);
        this.getUser = this.getUser.bind(this);
        this.showHome = this.showHome.bind(this);
    }

    componentDidMount(){
        this.getPost();
        this.getUser()
     }


    getPost(){
        axios.get('/api/post').then(res => {
            this.setState({ post: res.data });
          })
          .catch(err=>console.log(err))
    }


    getUser(){
        axios.get('/api/user').then(res => {
            this.setState({ data: res.data });
          })
          .catch(err=>console.log(err))
    }

    addOnePost(Id,title,desc){
        axios.post('api/post',{ID_post: Id},{Title: title},{description: desc}).then((res)=>{
            console.log(res);
        })
        .catch(err=>console.log(err))
    }

    createOneUser(em,ps,pass){
        axios.post('api/user',{email: em},{pseudo: ps},{password: pass}).then((res)=>{
            console.log(res);
        })
        .catch(err=>console.log(err))
    }

    showHome(){
        this.setState({
            show: "Home"
        })
    }

    showFeed(){
        this.setState({
            show: "Profile"
        })
    }


    render(){

        return (
            <span>
            {this.state.show === "Home" && <Home fn={this.showHome} />}
            {this.state.show === "Profile" && <Profile fn={this.showFeed} func={this.getUser}/>}
            {this.state.post.map((e,i)=> <OnePost post={e} key={i} func={this.getPost}/>)}
            </span>
        );
    }
};

