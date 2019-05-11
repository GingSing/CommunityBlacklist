import React, { Component } from 'react'

class Info extends Component {

    state={
        message: ''
    }

    componentWillMount(){
        const fetchOptions = {
            method: 'get',
            credentials: 'include'
        }
        fetch('http://localhost:4000/user/ensureAuthentication', fetchOptions)
        .then(res=>res.json())
        .then(body=>{
            console.log(body);
            if(body.message){
                this.setState({
                    message: body.message
                });
            }else if(body.error){
                this.setState({
                    message: body.error
                });
            }
        })
        .catch(err=>console.log(err));
    }

  render() {
    return (
      <div>
          <p>{this.state.message && this.state.message}</p>
      </div>
    )
  }
}

export default Info;