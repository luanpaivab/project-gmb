<template>
  <div class="user-configuracoes">
    <PageTitle icon="fa fa-cogs" main=" Configurações de Usuário" />
    <hr />
    <b-col md="5">
      <div class="stats">
        <Stat
          :title="user.name"
          :value="user.matricula"
          icon="fa fa-user"
          color="#556fa8"
        />
      </div>
    </b-col>
    <b-container>
      <div class="tabelas">
        <hr />
        <h1>Estilo de Tabelas</h1>
        <hr />
        <div>
          <b-form-group label="Estilos das Células" label-cols-lg="2">
            <b-form-checkbox
              v-model="striped"
              :aria-describedby="ariaDescribedby"
              inline
              >Striped</b-form-checkbox
            >
            <b-form-checkbox
              v-model="bordered"
              :aria-describedby="ariaDescribedby"
              inline
              >Bordered</b-form-checkbox
            >
            <b-form-checkbox
              v-model="borderless"
              :aria-describedby="ariaDescribedby"
              inline
              >Borderless</b-form-checkbox
            >
            <b-form-checkbox
              v-model="outlined"
              :aria-describedby="ariaDescribedby"
              inline
              >Outlined</b-form-checkbox
            >
            <b-form-checkbox
              v-model="small"
              :aria-describedby="ariaDescribedby"
              inline
              >Small</b-form-checkbox
            >
            <b-form-checkbox
              v-model="hover"
              :aria-describedby="ariaDescribedby"
              inline
              >Hover</b-form-checkbox
            >
            <b-form-checkbox
              v-model="dark"
              :aria-describedby="ariaDescribedby"
              inline
              >Dark</b-form-checkbox
            >
            <b-form-checkbox
              v-model="fixed"
              :aria-describedby="ariaDescribedby"
              inline
              >Fixed</b-form-checkbox
            >
            <b-form-checkbox
              v-model="footClone"
              :aria-describedby="ariaDescribedby"
              inline
              >Foot Clone</b-form-checkbox
            >
            <b-form-checkbox
              v-model="noCollapse"
              :aria-describedby="ariaDescribedby"
              inline
              >No border collapse</b-form-checkbox
            >
          </b-form-group>

          <b-form-group
            label="Head Variant"
            label-cols-lg="2"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              v-model="headVariant"
              :aria-describedby="ariaDescribedby"
              class="mt-lg-2"
            >
              <b-form-radio :value="null" inline>None</b-form-radio>
              <b-form-radio value="light" inline>Light</b-form-radio>
              <b-form-radio value="dark" inline>Dark</b-form-radio>
            </b-form-radio-group>
          </b-form-group>

          <b-form-group
            label="Table Variant"
            label-for="table-style-variant"
            label-cols-lg="2"
          >
            <b-form-select
              id="table-style-variant"
              v-model="tableVariant"
              :options="tableVariants"
            >
              <template #first>
                <option value="">-- None --</option>
              </template>
            </b-form-select>
          </b-form-group>

          <b-table
            :striped="striped"
            :bordered="bordered"
            :borderless="borderless"
            :tbody-tr-class="rowClass"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :no-border-collapse="noCollapse"
            :items="items"
            :fields="fields"
            :head-variant="headVariant"
            :table-variant="tableVariant"
          >
            <template slot="status" slot-scope="data">
              <b-button @click="rowClass(data.item)"></b-button>
            </template>
          </b-table>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { baseApiUrl } from "../../global";
import PageTitle from "../template/PageTitle";
import Stat from "../home/Stat";
import axios from "axios";

export default {
  name: "ConfiguracoesUser",
  components: { PageTitle, Stat },
  data: function () {
    return {
      user: {},
      items: [
        {
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
      fields: ["first_name", "last_name", "age", {key: "status", label: "Ações"}],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark",
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: false,
    };
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.status === "awesome") return "table-success";
    },
  },
  mounted() {
    const url = `${baseApiUrl}/users/${this.$route.params.id}`;
    axios.get(url).then((res) => (this.user = res.data));
    // window.scrollTo(0, 0);
  },
};
</script>

<style>
.user-configuracoes {
  padding: 20px;
}

.tabelas h1 {
  font-size: 1.8rem;
  text-align: center;
}
</style>


