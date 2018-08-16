import React, { Component } from 'react';
import './AdminHomepage.css';


class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Click to select your role
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Partner </button>
                <button> User </button>
                <button> Admin </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;














// original code /// 


// import axios from 'axios';
// import React, { Component, Fragment } from 'react';
// import { List, ListItem } from 'material-ui/List';
// import { withUser } from '../services/withUser';

// class HomePage extends Component {
//   state = {
//     stuff: null
//   }
//   componentDidMount() {
//     // only try loading stuff if the user is logged in.
//     if (!this.props.user) {
//       return;
//     }

//     axios.get('/api/stuff')
//       .then(res => {
//         this.setState({
//           stuff: res.data
//         });
//       })
//       .catch(err => {
//         // if we got an error, we'll just log it and set stuff to an empty array
//         console.log(err);
//         this.setState({
//           stuff: []
//         });
//       });
//   }
//   render() {
//     const { user } = this.props; // get the user prop from props
//     const { stuff } = this.state; // get stuff from state

//     return (
//       <Fragment>
//         {user && stuff &&
//           <div>
//             Welcome back, {user.username}!
//           <List>
//            {stuff.map((s, i) => <ListItem key={i} primaryText={s} />)}
//           </List>
//           </div>
//         }
//         {user && !stuff &&
//           <div>Hold on, looking for your stuff...</div>
//         }
//         {!user &&
//           <div>Hey! I don't recognize you! Register and log in using the link above</div>
//         }
//       </Fragment>
//     );
//   }
// }





///// Risa's latest try ////
{/* <Dropdown
  title="Select location"
  list={this.state.role}
/>

constructor(props){
  super(props)
  this.state = {
    listOpen: false,
    headerTitle: this.props.title
  }
}


handleClickOutside(){
  this.setState({
    listOpen: false
  })
}
toggleList(){
  this.setState(prevState => ({
    listOpen: !prevState.listOpen
  }))
}
render(){
  const{list} = this.props
  const{listOpen, headerTitle} = this.state
  return(
    <div className="dd-wrapper">
    <div className="dd-header" onClick={() => this.toggleList()}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen
          ? <FontAwesome name="angle-up" size="2x"/>
          : <FontAwesome name="angle-down" size="2x"/>
        }
    </div>
     {listOpen && <ul className="dd-list">
       {list.map((item) => (
         <li className="dd-list-item" key={item.id} >{item.title}</li>
        ))}
      </ul>}
    </div>
  )
}


constructor() {
  super()
  this.state = {
    location: [
      {
          id: 0,
          title: 'Admin',
          selected: false,
          key: 'Role'
      },
      {
        id: 1,
        title: 'Partner',
        selected: false,
        key: 'Role'
      },
      {
        id: 2,
        title: 'User',
        selected: false,
        key: 'Role'
      },
    ]
  }
}

toggleSelected(id, key){
  let temp = this.state[key]
  temp[id].selected = !temp[id].selected
  this.setState({
    [key]: temp
  })
}

key = "location"
//These two refers to the same state variable
- this.state.location
- this.state[key]




// withUser function will wrap the specified component in another component that will
// inject the currently logged in user as a prop called "user"
export default withUser(HomePage); */}










/// oldest version //

// import axios from 'axios';
// import React, { Component, Fragment } from 'react';
// import { List, ListItem } from 'material-ui/List';
// import { withUser } from '../services/withUser';

// class HomePage extends Component {
//   state = {
//     stuff: null
//   }
//   componentDidMount() {
//     // only try loading stuff if the user is logged in.
//     if (!this.props.user) {
//       return;
//     }

//     axios.get('/api/stuff')
//       .then(res => {
//         this.setState({
//           stuff: res.data
//         });
//       })
//       .catch(err => {
//         // if we got an error, we'll just log it and set stuff to an empty array
//         console.log(err);
//         this.setState({
//           stuff: []
//         });
//       });
//   }
//   render() {
//     const { user } = this.props; // get the user prop from props
//     const { stuff } = this.state; // get stuff from state

//     return (
//       <Fragment>
//         {user && stuff &&
//           <div>
//             Welcome back, {user.username}!
//           <List>
//            {stuff.map((s, i) => <ListItem key={i} primaryText={s} />)}
//           </List>
//           </div>
//         }
//         {user && !stuff &&
//           <div>Hold on, looking for your stuff...</div>
//         }
//         {!user &&
//           <div>Hey! I don't recognize you! Register and log in using the link above</div>
//         }
//       </Fragment>
//     );
//   }
// }

// // withUser function will wrap the specified component in another component that will
// // inject the currently logged in user as a prop called "user"
// export default withUser(HomePage);
