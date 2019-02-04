import React, {Component} from 'react';
import Burger from './../../components/Burger/Burger';

export default class BurgerBuilder extends Component {
    render() {
      return (
        // short hand for fragment
        <> 
            <Burger/>
            <div>Controls</div>
        </>
          );
        }
      }