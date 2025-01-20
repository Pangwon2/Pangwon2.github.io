<template>
    <div class="gallery">
        <div v-for="(image, a) in images" :key="a" class="image-item" @click="goToDetail(a)">
            <img :src="image" alt="Gallery Image" />
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                // 모든 .jpg 파일 경로를 가져오는 require.context
                images: this.loadImages(),
                id: this.a
            };
        },
        methods: {
            loadImages() {
                // 'assets' 폴더에서 모든 .jpg 파일을 가져옵니다.
                const context = require.context('../assets', false, /\.(jpg|png)$/); // .jpg 파일만 선택
                return context.keys().map(context); // 모든 .jpg 파일 경로를 반환
            },
            goToDetail(id) {
                console.log(id);
                this.$router.push(`/board/detail/${id}`)
            }
        },
    };

</script>

<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.image-item {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>