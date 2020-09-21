<template>
  <div class="img-upload">
    <Upload
      action="/"
      ref="upload"
      :format="['jpg', 'jpeg', 'png']"
      accept="image/*"
      :before-upload="handleUpload"
      :show-upload-list="false"
    >
      <div class="img-upload__inner">
        <div class="desc" :class="{ 'pc-desc': isPc }" v-if="!imgSrc">
          <div :class="{ 'pc-plus': isPc, 'mobile-plus': !isPc }">
            <van-icon name="plus" />
          </div>
          <div>Upload task picture</div>
        </div>
        <img v-else :src="imgSrc" alt="" /></div
    ></Upload>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Prop } from "vue-property-decorator";

@Component({})
export default class ImgUpload extends Vue {
  @PropSync("value")
  imgFile!: File;

  @Prop({ default: false })
  isPc!: boolean;

  imgSrc = "";

  handleUpload(file: File) {
    this.imgFile = file;
    this.$emit("upload-success", file);

    const reader = new FileReader();

    reader.onload = e => {
      // eslint-disable-next-line
      this.imgSrc = (e as any).target.result;
    };

    reader.readAsDataURL(file);
  }
}
</script>

<style lang="scss">
.mobile-plus {
  font-size: 0.5rem;
}
.pc-plus {
  font-size: 40px;
}

.img-upload {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .ivu-upload {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .pc-desc {
      padding-top: 30px;
    }

    .desc {
      text-align: center;
      font-family: ArialMT;
      font-size: 0.32rem;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0.02rem;
      color: #8db0b7;
    }

    > img {
      display: block;
      height: 100%;
    }
  }
}
</style>
