# Stage 2 - create component and use ngModel

We're using Docker, so enter into the "app" shell:

```
> docker-compose exec app sh
$ 
```

We can now create our own component:

```
# g is an alias to "generate"
ng g component component/MyCompenent --dry-run
```

Dry-run avoid the creation, it is usefull to check that the generated component will be at the right place. If it's ok, relaunch the command **witout --dry-run**

Take a look on how Angular client uses upper case letter to split words. `MyComponent` is renamed to `my-component` for files, and the directive is named `app-my-component`. You can force directive name using options, check `ng help`.

You will be able to make exactly what we've done in the "DemoComponent".


Note that:

- We need to import FormsModule
- We changed `app.component.html` to not have design decoration
- We added a route in `app-routing.module.ts`
