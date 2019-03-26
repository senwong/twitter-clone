import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Title from './Title';
import SubTitle from './SubTitle';
import LinkItem from './LinkItem';
import TextInput from './TextInput';
import CheckBoxInput from './CheckBoxInput';
import RadioGroup, { RadioGroupType } from './RadioGroup';
import { useMediaQuery } from '../utilitys';

/*
const data = {
  title: '设置',
  list: [
    {
      title: '@sunsenflower',
      list: [
        {type: 'link', key: 1, to: '/setings/account', title: '账号'},
        {type: 'link', key: 2, to: '/setings/safety', title: '隐私和安全'},
        {type: 'link', key: 3, to: '/setings/notification', title: '通知'},
      ]
    },
    {
      title: '通用',
      list: [
        {type: 'link', key: 1, to: '/setings/account', title: '数据使用'},
        {type: 'link', key: 2, to: '/setings/safety', title: '辅助功能'},
        {type: 'link', key: 3, to: '/setings/notification', title: '关于应用'},
      ]
    },
  ],
}
*/
const Gap = styled.div`
  height: 9px;
`;
function ItemList({ data }) {
  return (
    <>
      {
        data.title
          ? <SubTitle>{data.title}</SubTitle>
          : <Gap />
      }
      {
        data.list
        && data.list.length > 0
        && (
          data.list.map(({
            key, to, title, subTitle, type, isNav, radios, label,
          }) => {
            switch (type) {
              case 'link':
                return (
                  <LinkItem key={key} to={to} title={title} subTitle={subTitle} isNav={isNav} />
                );
              case 'checkbox':
                return <CheckBoxInput key={key} title={title} subTitle={subTitle} />;
              case 'tex-tinput':
                return <TextInput key={key} labelText={label} />;
              case 'radio-group':
                return <RadioGroup key={key} title={title} subTitle={subTitle} radios={radios} />;
              default:
                return null;
            }
          })
        )
      }
    </>
  );
}
const LinkItemType = PropTypes.shape({
  key: PropTypes.number.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, ReactRouterPropTypes.route]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  isNav: PropTypes.bool,
});
const CheckBoxType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
});
const subDataType = PropTypes.shape({
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.oneOfType([LinkItemType, CheckBoxType, RadioGroupType])),
});
ItemList.propTypes = {
  data: subDataType.isRequired,
};

function MakeSettingPanel({ data }) {
  const isWide = useMediaQuery('(min-width: 1000px)');
  return (
    <div>
      { isWide && <Title>{data.title}</Title> }
      {
        data.list
        && data.list.length > 0
        && data.list.map(subData => <ItemList key={subData.key} data={subData} />)
      }
    </div>
  );
}
const DataType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(subDataType),
});
MakeSettingPanel.propTypes = {
  data: DataType.isRequired,
};
export default MakeSettingPanel;
