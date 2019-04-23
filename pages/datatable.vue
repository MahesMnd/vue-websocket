<template>
  <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      :rows-per-page-items="[10]"
      select-all
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:headers="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template v-slot:items="props">
        <tr>
          <td>
            <v-checkbox
              @change="props.selected = !props.selected"
              :input-value="props.selected"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
          <td v-if=props.selected class="text-xs-right">
            <div
              v-if="props.item.type==='Boolean'"
            >
              <v-select
                :items="[{name:'True', value:'true'}, {name:'False', value:'false'}]"
                @change="props.item.value = $event"
                item-text="name"
                item-value="value"
              ></v-select>

            </div>
            <div
              v-else-if="props.item.type==='Date'"
            >
              <v-date-picker
              ></v-date-picker>
            </div>
            <div
              v-else-if="props.item.type==='DateRange'"
            >
              <v-text-field
              ></v-text-field>

              <v-text-field
              ></v-text-field>
            </div>
            <div
              v-else
            >
              <v-text-field
              ></v-text-field>
            </div>
          </td>
          <td v-else class="text-xs-right">
            {{ props.item.type }}
          </td>
        </tr>
      </template>
    </v-data-table>
</template>

<script>
  export default {
    data: () => ({
    pagination: {
      sortBy: 'name'
    },
    selected: [],
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        value: 'name'
      },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
      { text: 'Type', value: 'type' }
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
        type: 'Text',
        value:''
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
        type: 'DateRange',
        value:''
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
        type: 'Boolean',
        value:''
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
        type: 'Integer',
        value:''
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
        type: 'Text',
        value:''
      }
    ]
  }),

  methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    setValue (event, item) {
      console.log(event, item)
      item.value = event
    }
  }
}
</script>
