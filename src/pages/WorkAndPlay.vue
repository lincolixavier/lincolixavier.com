<template>
  <Layout>
    <div class="title-page title-work">work & play</div>
    <section class="section-workplay">
      <Job
        class="post-container"
        v-for="edge in $page.allJobs.edges"
        :key="edge.node.id"
        :job="edge.node"
      />
    </section>
  </Layout>
</template>
<page-query>
  query {
  allJobs{
    edges {
      node {
        title
        tags
        linkToProject	
        colorTheme
      }
    }
  }
}
</page-query>

<script>
import Job from "@/components/Job";

export default {
  components: { Job },
  metaInfo: {
    title: "Work & Play",
  },
};
</script>

<style lang="scss">
.title-work {
  color: #61cc33;
  &:after {
    background: #61cc33;
  }
}

.section-workplay {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media screen and (max-width: 700px) {
  .section-workplay .project {
    width: 100%;
    padding: 13px;
    margin: 11px;
  }
  .container-page {
    overflow: hidden;
  }
}
</style>
