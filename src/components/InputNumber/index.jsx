import React from 'react'
import BasicItem from '../BasicItem'
import AntdInputNumber from 'antd/lib/input-number'
import AntdInput from 'antd/lib/input'

function component(BasicItemComponent){
  return class InputNumber extends React.Component {
    constructor(props){
      super(props);
    }

    static contextTypes = {
      antLocale: React.PropTypes.object,
    };

    getRules(){
      return [
      ]
    }

    render(){
      let { rules=[],...other } = this.props;
      let temp_rules = [];
      Array.prototype.push.apply(temp_rules,rules)
      Array.prototype.push.apply(temp_rules,this.getRules())
      other.rules = temp_rules;
      other.value = parseInt(other.value,10);
      other.targetComponent = AntdInput;
      if(isNaN(other.value)){
        other.value = undefined;
      }
      //console.debug(other)
      return (
        <BasicItemComponent { ...other }/>
      )
    }
    
  }
}

export default component(BasicItem) 





