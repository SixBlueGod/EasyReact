import './common.css'
import React, { useRef, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Space, Typography, Radio, Input, Button, List, Divider,Layout  } from 'antd';
import _, { iteratee } from 'lodash'
import moment from 'moment'
import { v7 as uuidv7} from 'uuid'

import {
    LikeTwoTone
  } from '@ant-design/icons';

const { Text, Link } = Typography;
const { TextArea } = Input;
const {Header, Footer, Sider, Content} = Layout

const list = [
    {
        // 评论id
        rpid: 3,
        //用户信息
        user: {
            uid: '132588464',
            avatar: 'https://pic1.zhimg.com/v2-6f067bf071e5743265da744d5cc64a1c_1440w.jpg',
            uname: '周杰伦',
            level: '2'
        },
        //评论内容
        content: '哎哟，不错哦',
        //评论时间
        ctime: '2024-10-18 08:15',
        like: 88
    },
    {
        rpid: 2,
        user: {
            uid: '88884688',
            avatar: 'https://picx.zhimg.com/70/v2-97d7c37223e46b36e4543f2d03b23ab2_1440w.avis?source=172ae18b&biz_tag=Post',
            uname: '许嵩',
            level: '3'
        },
        content: '我寻你千百度， 日出到日暮',
        ctime: '2024-10-17 12:10',
        like: 32
    },
    {
        rpid: 1,
        user: {
            uid: '88667985',
            avatar: 'https://picx.zhimg.com/80/v2-95d6409eedca7bbd19474958a06ce197_720w.webp?source=2c26e567',
            uname: '林俊杰',
            level: '4'
        },
        content: '哈哈哈有意思',
        ctime: '2024-10-15 10:10',
        like: 6
    },
    {
        rpid: 4,
        user: {
            uid: '1234567',
            avatar: 'https://pic2.zhimg.com/v2-eb81c0fd726adcd218baf915c3836529_1440w.jpg',
            uname: 'SAM',
            level: '9'
        },
        content: '没错就是我',
        ctime: '2024-11-08 10:10',
        like: 6
    }
]


// 当前用户信息
const user = {
    // 用户id
    uid: '1234567',
    // 用户头像
    avatar: 'https://pic2.zhimg.com/v2-eb81c0fd726adcd218baf915c3836529_1440w.jpg',
    // 用户昵称
    uname: 'SAM',
    level: '9'
}

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'pink',
}

const headerStyle = {
    backgroundColor: 'orange',
  };

const contentStyle = {
    textAlign: 'center',
    paddingInline: '20px 20px',
    lineHeight: '12px',
};
const footerStyle = {
};
const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
  };

const CommonApp = () => {
    //使用useState维护list
    const [commonList, setCommetList] = useState(_.orderBy(list, 'like', 'desc'))
    const [position, setPosition] = useState('hotest');

    const handleTabChange = (type) => {
        console.log(type)
        setPosition(type)

        //基于列表的排序
        if(type === 'hotest') {
            //根据点赞数量排序 使用lodash工具的orderby方法 (需要排序的list, 排序关键字， 排序方式)
            setCommetList(_.orderBy(commonList, 'like', 'desc'))
        } else {
            //根据创建时间排序
            setCommetList(_.orderBy(commonList, 'ctime', 'desc'))
        }
    }

    // 定义状态来控制按钮的显示和隐藏
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    // 处理输入框的点击事件，设置按钮为可见
    const handleInputClick = () => {
        setIsButtonVisible(true);
    };
    // 处理输入框失去焦点事件，设置按钮为不可见
    const handleInputBlur = () => {
        setIsButtonVisible(false);
    };

    //发表评论
    const [content, setContent] = useState('')
    const inputRef =  useRef(null)
    const handlPublish = () => {
        setCommetList([
            ...commonList,
            {
                // 评论id
                rpid: uuidv7(),
                //用户信息
                user: {
                    uid: '132588469',
                    avatar: 'https://pic2.zhimg.com/v2-eb81c0fd726adcd218baf915c3836529_1440w.jpg',
                    uname: '哥是个传说'
                },
                //评论内容
                content: content,
                //评论时间
                ctime: moment().format('YYYY-MM-DD HH:mm'),
                like: 0
            },
        ])
        //清空输入内容
        setContent('')
        //重新聚集 dom(useRef) - focus
        inputRef.current.focus()
    }

    //设置是否喜欢评论
    const [like, setLike] = useState(false);
    const likeColor = like ? '#FF69B4' : '#1890ff';
    const handleLikeClick = (e) => {
        setLike(!like);
        console.log(like);
        console.log(e);
    }

    //删除评论
    const handleDel = (id) => {
        console.log(id);
        //对commentList做过滤处理
        setCommetList(commonList.filter(item => item.rpid !== id))
        console.log(commonList);
    }

    return (
        <Flex gap='middle' className="App" vertical>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>Header</Header>
                <Layout>
                    <Content style={contentStyle} >
                        <Flex className='comment-header' vertical>
                            <Flex className='navbar'> 
                                <h2> 评论</h2>
                                <Text type="secondary" className='count'>1426</Text>
                                <Space>
                                    <Radio.Group value={position} onChange={(e) => handleTabChange(e.target.value)}>
                                        <Radio.Button value="newest">最新</Radio.Button>
                                        <Radio.Button value="hotest">最热</Radio.Button>
                                    </Radio.Group>
                                </Space>
                            </Flex>
                            
                            <Flex gap={"small"} >
                                <Avatar size={64} icon={<UserOutlined />} src={user.avatar} />
                                {/* input输入框 受控表单绑定 */}
                                <Flex className='inputText' vertical >
                                    <TextArea  
                                    rows={1} 
                                    placeholder="宫廷玉液酒，评论走一走" 
                                    allowClear  
                                    onClick={handleInputClick}
                                    ref={inputRef}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}/>
                                    

                                    {isButtonVisible && 
                                    <Flex className='sendContent' vertical align="flex-end" justify='justify-content'>
                                        <Button type="primary" onClick={handlPublish}>发布</Button>
                                    </Flex>
                                    }
                                </Flex>
                            </Flex>
                            
                        </Flex>
                        
                        {/* 评论内容 */}
                        <Flex className="comment-container" vertical>
                            {/* 评论项*/}
                            {commonList.map (item => (

                                <Flex key={item.rpid} className='reply-item' horizontal="true">
                                    <Flex>
                                    <Avatar size={64} icon={<UserOutlined />} src={item.user.avatar} style={{marginRight: '15px'}}/>
                                    </Flex>
                                    <Flex className="comment-body" vertical>
                                        <Flex className="comment-header">
                                            <Flex className="comment-user" horizontal="true">
                                                <span className="comment-username">{item.user.uname}</span>
                                                <span className="comment-level">等级: Lv{item.user.level}</span>
                                            </Flex>
                                        </Flex>
                                        <Flex className="comment-content">
                                            {item.content}
                                        </Flex>
                                        <Flex className="comment-meta">
                                            <Flex className="comment-time">{item.ctime}</Flex>

                                            <Flex className="comment-actions">
                                                <Flex className="comment-action"><LikeTwoTone twoToneColor={likeColor} onClick={e =>handleLikeClick(e)}/>点赞({item.like})</Flex>
                                                <Flex className="comment-action">回复</Flex>
                                                {user.uid === item.user.uid && 
                                                <Flex className="comment-action" onClick={() => handleDel(item.rpid)}>删除</Flex>}
                                            </Flex>
                                        </Flex>
                                        <Flex><Divider></Divider></Flex>

                                    </Flex>
                                </Flex>
                            ))}


                        </Flex>
                    </Content>
                    <Sider width="25%" style={siderStyle}>
                    Sider
                    </Sider>
                </Layout>

                <Footer style={footerStyle}>Footer</Footer>

            </Layout>



        </Flex>
    )
}

export default CommonApp