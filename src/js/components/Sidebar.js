/**
 * Sidebar Component
 *
 *  @author  Avraam Mavridis
 *
 */

'use strict';

import React from 'react';
import ExpandableContainer from './ExpandableContainer';

export default class Sidebar extends React.Component {


     render() {

        return (
            <div className="sidebar">
              <ExpandableContainer />
              <ExpandableContainer />
            </div>
        );
    };
};
