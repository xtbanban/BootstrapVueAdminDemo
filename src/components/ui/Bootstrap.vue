<template>
  <div>
    <div class="bg-light lter b-b wrapper-md">
      <h1 class="m-n font-thin h3">Bootstrap</h1>
    </div>
    <div class="wrapper-md">
      <div class="row">
        <div class="col-lg-6">
          <div class="panel panel-default">
            <div class="panel-heading">Dropdown</div>
            <div class="panel-body">
              <v-dropdown class="dropdown inline" b-class="btn-default">
                <span slot="title">Default</span>
                <ul class="dropdown-menu" slot="content">
                  <li>
                    <a href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)">Separated link</a>
                  </li>
                </ul>
              </v-dropdown>
              <v-dropdown class="dropdown inline" b-class="btn-primary">
                <span slot="title">Primary</span>
                <ul class="dropdown-menu" slot="content">
                  <li>
                    <a href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)">Separated link</a>
                  </li>
                </ul>
              </v-dropdown>
              <v-dropdown class="dropdown inline" b-class="btn-success">
                <span slot="title">Success</span>
                <ul class="dropdown-menu" slot="content">
                  <li>
                    <a href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)">Separated link</a>
                  </li>
                </ul>
              </v-dropdown>
              <v-dropdown class="dropdown inline" b-class="btn-info">
                <span slot="title">Info</span>
                <ul class="dropdown-menu" slot="content">
                  <li>
                    <a href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)">Separated link</a>
                  </li>
                </ul>
              </v-dropdown>
              <v-dropdown class="dropdown inline" b-class="btn-warning">
                <span slot="title">Warning</span>
                <ul class="dropdown-menu" slot="content">
                  <li>
                    <a href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)">Separated link</a>
                  </li>
                </ul>
              </v-dropdown>
              <v-dropdown class="dropdown inline" b-class="btn-danger">
                <span slot="title">Danger</span>
                <ul class="dropdown-menu" slot="content">
                  <li>
                    <a href="javascript:void(0)">Action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Another action</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Something else here</a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)">Separated link</a>
                  </li>
                </ul>
              </v-dropdown>
              <div class="m-t">
                <v-dropdown class="btn-group" b-class="btn-default" b-division="true">
                  <span slot="title">Default</span>
                  <ul class="dropdown-menu" slot="content">
                    <li>
                      <a href="javascript:void(0)">Action</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Another action</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Something else here</a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </v-dropdown>
                <v-dropdown class="btn-group" b-class="btn-primary" b-division="true">
                  <span slot="title">Default</span>
                  <ul class="dropdown-menu" slot="content">
                    <li>
                      <a href="javascript:void(0)">Action</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Another action</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Something else here</a>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </v-dropdown>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">Tab</div>
            <div class="panel-body">
              <v-tab :b-tab="['tab1','tab2','tab3']" :b-active="0" @change="tabChange">
                <div slot="tab1">1111</div>
                <div slot="tab2">2222</div>
                <div slot="tab3">callback</div>
              </v-tab>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">Modal</div>
            <div class="panel-body">
              <button class="btn btn-success" type="button" @click="modalDef=!modalDef">open me</button>
              <button class="btn btn-default" type="button" @click="modalLg=!modalLg">Large modal</button>
              <button class="btn btn-default" type="button" @click="modalXs=!modalXs">Small modal</button>
              <v-modal v-if="modalDef" @close="modalDef=!modalDef">
                <span slot="header">Modal title</span>
                <span slot="body">Modal default</span>
              </v-modal>
              <v-modal v-if="modalLg" @close="modalLg=!modalLg" b-size="lg">
                <span slot="header">Modal title</span>
                <span slot="body">Modal lg</span>
              </v-modal>
              <v-modal v-if="modalXs" @close="modalXs=!modalXs" b-size="sm">
                <span slot="header">Modal title</span>
                <div slot="body">
                  <p>Modal sm</p>
                </div>
              </v-modal>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">Modal extend</div>
            <div class="panel-body">
              <button class="btn btn-default" type="button" @click="alertTxt='前端老徐Vue组件！';alert=!alert;">Alert</button>
              <button class="btn btn-primary" type="button" @click="confirm=!confirm">Confirm</button>
              <button class="btn btn-info" type="button" @click="prompt=!prompt">Prompt</button>
              <v-alert v-if="alert" @close="alert=!alert" b-size="sm">{{alertTxt}}</v-alert>
              <v-confirm v-if="confirm" @close="confirm=!confirm" @ok="confirmok" b-size="sm">您认为老徐是前端大牛么？</v-confirm>
              <v-prompt v-if="prompt" @close="prompt=!prompt" @ok="promptok" b-tip="请输入您的姓名"></v-prompt>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="panel panel-default">
            <div class="panel-heading">Pagination</div>
            <div class="panel-body">
                <p>当前页码：<strong class="text-danger">{{curPage}}</strong></p>
                <v-navigation @change="pageChange" b-size="sm" :current-page="2" :total-items="100" :items-per-page="10" :boundary-links="false" ></v-navigation>
                <v-navigation b-size="md" :current-page="2" :total-items="100" :items-per-page="10" :boundary-links="false" ></v-navigation>
                <v-navigation b-size="lg" :current-page="2" :total-items="100" :items-per-page="10" :boundary-links="false" ></v-navigation>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import Dropdown from '../bootstrap/Dropdown'
import Tab from '../bootstrap/Tab'
import Modal from '../bootstrap/Modal'
import Alert from '../bootstrap/Alert'
import Confirm from '../bootstrap/Confirm'
import Prompt from '../bootstrap/Prompt'
import Navigation from '../bootstrap/Navigation'

export default {
  name: "bootstrap",
  data() {
    return {
      modalDef: false,
      modalLg: false,
      modalXs: false,
      alertTxt: '前端老徐Vue组件！',
      alert: false,
      confirm: false,
      prompt: false,
      curPage:0
    }
  },
  methods: {
    tabChange(index) {
      if (index == 2) {
        alert('绑定回调事件--' + index)
      }
    },
    modalClose() {
      alert(1)
    },
    confirmok() {
      this.confirm = !this.confirm;
      this.alertTxt = "您很有眼光！";
      this.alert = true;
    },
    promptok(t) {
      this.prompt = !this.prompt;
      this.alertTxt = t;
      this.alert = true;
    },
    pageChange(n){
      this.curPage=n
    }
  },
  components: {
    "v-dropdown": Dropdown,
    "v-tab": Tab,
    "v-modal": Modal,
    "v-alert": Alert,
    "v-confirm": Confirm,
    "v-prompt": Prompt,
    "v-navigation": Navigation
  }
}

</script>
