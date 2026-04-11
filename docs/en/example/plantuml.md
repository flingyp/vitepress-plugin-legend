# PlantUML

## Fence: plantuml

```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response

Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml

```

## Fence: puml

`puml` is equivalent to `plantuml`.

```puml
@startuml
Alice -> Bob: hello
Bob --> Alice: hi
@enduml
```

## With toolbar (frontmatter)

```plantuml
---
showToolbar: true
---
@startuml
left to right direction
rectangle ModuleA
rectangle ModuleB
ModuleA --> ModuleB
@enduml
```

## Source reference

```text
@startuml
Alice -> Bob: hello
Bob --> Alice: hi
@enduml
```
