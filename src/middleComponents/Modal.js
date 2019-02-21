import React from 'react'
import styled from 'styled-components'
import Text from "../BaseComponents/Text"
import CustomizedButton from '../BaseComponents/CustomizedButton'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 330px;
  box-sizing: border-box;
  background-color: white;
  padding: 37px 9px;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.handleContainerClick = this.handleContainerClick.bind(this);
    this.contentRef = null;
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleContainerClick(e) {
    if (e.target !== this.contentRef.current && !this.contentRef.current.contains(e.target)) {
      this.props.toggle();
    }
  }
  handleConfirm(e) {
    this.props.toggle();
    this.props.onConfirm && typeof this.props.onConfirm === 'function' && this.props.onConfirm();
    e.stopPropagation();
  }
  handleCancel(e) {
    this.props.toggle();
    this.props.onCancel && typeof this.props.onCancel === 'function' && this.props.onCancel();
    e.stopPropagation();
  }
  render () {
    const {title, type, hasConfirm, hasCancel} = this.props.config
    return (
      <Container onClick={this.handleContainerClick}>
        <Content ref={this.contentRef}>
          <div style={{marginTop: '14px', textAlign: 'center'}}>
            <Text 
              primary={type==='primary'}
              secondary={type==='secondary'}
              warning={type==='warning'} 
            >{title}</Text>
          </div>
          {
            hasConfirm && (
              <div style={{marginTop: '18px', minWidth: '58px'}}>
                <CustomizedButton filled onClick={this.handleConfirm}>是</CustomizedButton>
              </div>
            )
          }
          {
            hasCancel && (
              <div style={{marginTop: '9px', minWidth: '58px'}}>
                <CustomizedButton onClick={this.handleCancel}>坦</CustomizedButton>
              </div>
            )
          }
        </Content>
      </Container>
    )
  }
 
}