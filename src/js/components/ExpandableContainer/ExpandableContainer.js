/**
 * ExpandableContainer Component
 *
 *  @author  Avraam Mavridis
 *
 */

'use strict';

import React from 'react';
import classNames from 'classnames';

export default class ExpandableContainer extends React.Component {

    constructor()
    {
      super();
      this.state = {
        isOpen: true
      }
    }

    toggle()
    {
      this.setState( { isOpen: !this.state.isOpen } );
    }


     render() {
        const arrowClassNames = classNames( 'arrow', { closed : !this.state.isOpen })
        const contentClassNames = classNames( 'content', { closed : !this.state.isOpen })

        return (
          <div className="expandable-container">

            <header>
              <label> Something </label>
              <span onClick={ () => this.toggle() } className={ arrowClassNames }></span>
            </header>

            <div className={ contentClassNames }>
            </div>
          </div>
        );
    };
};
