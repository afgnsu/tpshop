<?php
/**
 * 会员中心
 * User: Administrator
 * Date: 2017/1/1
 * Time: 11:11
 */


namespace Home\Controller;
use Think\Controller;
class MemberController extends MemberCommonController
{

    public function index()
    {
        $userModel = D('User');
        $user = $userModel->where(array('email'=>session('user_email')))->find();
        $this->assign('user',$user);
        $this->display();
    }





}