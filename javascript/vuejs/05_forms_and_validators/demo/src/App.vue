<template>
  <div class="container d-flex pt-5">
    <p v-if="isLoading">Is loading</p>
    <form class="flex-fill" @submit.prevent="handleFormSubmit">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>Registration</h1>
          <hr />
          <div class="form-group">
            <!-- <Email :email="formData.email" @onInput="formData.email = $event" /> -->
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="$v.formData.email.$model"
            />
            <template v-if="$v.formData.email.$error">
              <div class="error" v-if="!$v.formData.email.required">
                Field is required
              </div>
            </template>
            <!-- <CustomEmail v-model="formData.customEmail" /> -->
            <!---->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="$v.formData.password.$model"
            />

            <div class="alert alert-danger" v-if="$v.formData.password.$error">
              <p class="error" v-if="!$v.formData.password.required">
                Field is required
              </p>
              <p class="error" v-if="!$v.formData.password.minLength">
                Password must have at least
                {{ $v.formData.password.$params.minLength.min }}
              </p>
            </div>
            <!---->
          </div>
          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input
              type="password"
              id="re-password"
              class="form-control"
              v-model="$v.formData.confirmedPassword.$model"
            />

            <div
              class="alert alert-danger"
              v-if="$v.formData.confirmedPassword.$error"
            >
              <p class="error" v-if="!$v.formData.confirmedPassword.sameAs">
                The passwords do not match!
              </p>
            </div>
            <!---->
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.number="$v.formData.email.$model"
            />
          </div>

          <!---->
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="description">Description</label> <br />
          <textarea
            id="description"
            rows="5"
            class="form-control"
            v-model="$v.formData.description.$model"
          ></textarea>
          <!---->
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <h3>Skill Set</h3>
            <label for="js" v-for="set in skillSets" :key="set.id"
              ><input
                type="checkbox"
                :id="set.id"
                :value="set.name"
                v-model="formData.skillSet"
              />
              {{ set.name }}
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <p>GENDER</p>
          <label v-for="gender in genders" :key="gender.id" :for="gender.name"
            ><input
              type="radio"
              :id="gender.name"
              :value="gender.id"
              v-model="formData.gender"
            />
            {{ gender.name }}
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
        >
          <label for="country">Country</label>
          <select id="country" class="form-control" v-model="formData.country">
            <option v-for="c in countries" :key="c"> {{ c }}</option>
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button :disabled="disableSubmit" class="btn btn-primary">
            Submit!
          </button>
        </div>
      </div>
    </form>
    <form class="flex-fill" v-if="isSubmitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-heading">Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{ formData.email }}</p>
              <p>Password: {{ formData.password }}</p>
              <p>Age: {{ formData.age }}</p>
              <p>Description: {{ formData.description }}</p>
              <p><strong>Skill Set?</strong></p>
              <ul>
                <li v-for="skill in formData.skillSet" :key="skill">
                  {{ skill }}
                </li>
              </ul>
              <p>Gender: {{ formData.gender }}</p>
              <p>Country: {{ formData.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  required,
  email,
  minValue,
  minLength,
  maxLength,
  alphaNum,
  integer,
  sameAs,
} from "vuelidate/lib/validators";

import Email from "./components/Email";
import CustomEmail from "./components/CustomEmail";

export default {
  components: {
    Email,
    CustomEmail,
  },
  data() {
    return {
      isSubmitted: false,
      isLoading: false,
      countries: ["Choose a country", "Bulgaria", "Germany", "England"],
      genders: [
        {
          id: "male",
          name: "male",
        },
        {
          id: "fema",
          name: "female",
        },
      ],
      skillSets: [
        {
          id: "js",
          name: "Javascript",
        },
        {
          id: "csharp",
          name: "C#",
        },
        {
          id: "php",
          name: "PHP",
        },
        {
          id: "java",
          name: "Java",
        },
      ],
      formData: {
        email: "",
        customEmail: "",
        password: "",
        age: null,
        skillSet: [],
        gender: "",
        country: "Choose a country",
        description: "",
        confirmedPassword: "",
      },
    };
  },
  computed: {
    disableSubmit() {
      return this.$v.$invalid;
    },
  },
  methods: {
    async handleFormSubmit() {
      this.isSubmitted = true;
      this.isLoading = true;

      this.$v.$touch();
      const { formData } = this.$v;

      try {
        const res = await fetch("/form-submit", {
          method: "POST",
          body: JSON.stringify(this.formData),
        });
      } catch (err) {
        console.error("Unsuccess!", err);
      }
      this.isLoading = false;
    },
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
        alphaNum,
      },
      confirmedPassword: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
        alphaNum,
        sameAs: sameAs("password"),
      },
      age: {
        integer,
        minValue: minValue(18),
      },
      description: {
        maxLength: maxLength(100),
      },
    },
  },
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");

.error {
  color: red;
}
</style>
