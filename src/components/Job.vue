<template>
    <article class="project" :class="job.colorTheme">
        <h1 class="project-title">{{job.title}}</h1>
        <p class="project-description">
            {{job.description}}
        </p>

        <ul class="tags">
          <li :class="'tag ' + tag" v-for="tag in job.tags">{{ tag }}</li>
        </ul>
        <a target="_blank" :href="job.linkToProject" class="project-link">
          <svg id="foreign" width="25" height="25" viewBox="0 0 25 25">
            <g id="Grupo_143" data-name="Grupo 143" transform="translate(9.091)">
              <g id="Grupo_142" data-name="Grupo 142">
                <path id="Caminho_218" data-name="Caminho 218" d="M200.955,0h-9.091a1.136,1.136,0,0,0,0,2.273h6.348l-11.7,11.7a1.136,1.136,0,1,0,1.607,1.607l11.7-11.7v6.347a1.136,1.136,0,0,0,2.273,0V1.136A1.136,1.136,0,0,0,200.955,0Z" transform="translate(-186.182)"/>
              </g>
            </g>
            <g id="Grupo_145" data-name="Grupo 145" transform="translate(0 4.545)">
              <g id="Grupo_144" data-name="Grupo 144">
                <path id="Caminho_219" data-name="Caminho 219" d="M19.318,99.909a1.136,1.136,0,0,0-1.136,1.136v10.227H2.273V95.364H12.5a1.136,1.136,0,1,0,0-2.273H1.136A1.136,1.136,0,0,0,0,94.227v18.182a1.136,1.136,0,0,0,1.136,1.136H19.318a1.136,1.136,0,0,0,1.136-1.136V101.046A1.136,1.136,0,0,0,19.318,99.909Z" transform="translate(0 -93.091)"/>
              </g>
            </g>
          </svg>
          Veja o projeto
        </a>
      </article>
</template>

<script>
    export default {
        name: "Job",
        props: {
            job: Object,
        },
    }
</script>

<style lang="scss">

.section-workplay{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .project{
    width: 45%;
    padding: 20px;
    margin: 15px;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      opacity: 0;
      transition: all 170ms ease-in-out;
      transform: rotate(6deg) translate(40px, -15px);
    }
    &:hover:after{
      opacity: 1;
      transform: rotate(0deg) translate(0px, 0px);

    }

  }
}

.project-title{
  font-weight: 100;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.project-description{
  font-size: 20px;
}
.tags{
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  .tag{
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    font-weight: 100;
    font-size: 17px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 4px 10px;
    &.frontend{
      border-color: #FF0000;
      color: #FF0000;
    }
    &.javascript{
      border-color: #FFDE53;
      color: #807B00;
    }
    &.html5{
      border-color: #FF550A;
      color: #FF550A;
    }
    &.css3{
      border-color: #4A67DE;
      color: #4A67DE;
    }
    &.jquery{
      border-color: #1B359D;
      color: #1B359D;
    }
    &.rwd{
      border-color: #E13242;
      color: #E13242;
    }
    &.wordpress{
      border-color: #707070;
      color: #707070;
    }
    &.backend{
      border-color: #E13242;
      color: #E13242;
    }
    &.git{
      border-color: #6C6C6C;
      color: #6C6C6C;
    }
    &.open-source{
      border-color: rgb(20, 150, 81);
      color: rgb(18, 145, 77);
    }

    
  }
}
.project-link{
  display: flex;
  align-items: center;
  cursor: pointer;
  svg{
    margin-right: 10px;
    // fill:#e13242;
  }
  text-decoration: none;
  font-size: 18px;
}

.red-tag{
  &:after{
    border-color:#E13242;  
  }
  .project-title{
    color:#E13242;
  }
  .project-link{
    color:#E13242;  
    svg{
      fill:#E13242;
    }
  }
}

.green-tag{
  &:after{
    border-color:#205D12;  
  }
  .project-title{
    color:#205D12;
  }
  .project-link{
    color:#205D12;  
    svg{
      fill:#205D12;
    }
  }
}

.blue-tag{
  &:after{
    border-color:#117CAC;  
  }
  .project-title{
    color:#117CAC;
  }
  .project-link{
    color:#117CAC;  
    svg{
      fill:#117CAC;
    }
  }
}
.purple-tag{
  &:after{
    border-color:#764cde;  
  }
  .project-title{
    color:#764cde;
  }
  .project-link{
    color:#764cde;  
    svg{
      fill:#764cde;
    }
  }
}

.orange-tag{
  &:after{
    border-color:#f5a841;  
  }
  .project-title{
    color:#f5a841;
  }
  .project-link{
    color:#f5a841;  
    svg{
      fill:#f5a841;
    }
  }
}

@media screen and (max-width: 700px){
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